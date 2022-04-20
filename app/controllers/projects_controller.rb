class ProjectsController < ApplicationController
    
    def create
        project = Project.create!(project_params)
        render json: project, status: :created
    end

    def index
        projects = Project.where(client_id: session[:client_id])
        render json: projects, status: :ok
    end

    def completed
        projects = Project.where(completed: true)
        render json: projects, status: :ok
    end

    def update
        project = Project.find(params[:id])
        project.update(project_params)
        render json: project, status: :ok
    end

    def destroy 
        project = Project.find(params[:id])
        project.destroy
        head :no_content
    end

    private 

    def project_params
        params.permit(:name, :img, :address, :description, :client_id, :budget, :num_rooms, :completed)
    end
end
