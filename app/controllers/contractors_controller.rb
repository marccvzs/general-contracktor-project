class ContractorsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        contractor = Contractor.create!(contractor_params)
        render json: contractor, status: :created
    end

    def show 
        contractor = Contractor.find(email: params[:email])
        render json: contractor, status: :ok
    end
    
    private 

    def contractor_params
        params.permit(:email, :password, :password_confirmation, :company, :trade)
    end
end
