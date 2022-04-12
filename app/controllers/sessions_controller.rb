class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create_client, :create_contractor]

    def create_client
        client = Client.find_by(email: params[:email])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id
            render json: client, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def create_contractor
        contractor = Contractor.find_by(email: params[:email])
        if contractor&.authenticate(params[:password])
            session[:contractor_id] = contractor.id
            render json: contractor, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy_client
        session.delete :client_id
        head :no_content
    end

    def destroy_contractor
        session.delete :contractor_id
        head :no_content
    end
end
