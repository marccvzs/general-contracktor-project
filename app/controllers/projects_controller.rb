class ProjectsController < ApplicationController
    before_action :authorize

    def index
        projects = Project.all
        render json: projects, status: :ok
    end
    
    def create 
        project = Project.params(project_params)
    end 

    private 

    def project_params
        params.permit(:name, :contractor_id, :client_id, :num_rooms, :budget)
    end 

    def authorize
        render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :client_id || :contractor_id
    end
end
