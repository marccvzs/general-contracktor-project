class ClientsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def show
        client = Client.find_by(id: session[:client_id])
        render json: client, status: :ok
    end

    private

    def client_params
        params.permit(:email, :password, :password_confirmation, :name, :address, :budget)
    end

    def render_not_found_response
        render json: { error: "Client not found" }, status: :not_found
    end
end
