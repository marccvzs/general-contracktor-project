class ClientsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    private

    def client_params
        params.permit(:email, :password, :password_confirmation, :name, :address, :budget)
    end
end
