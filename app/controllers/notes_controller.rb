class NotesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: :create
    def create 
        note = Note.create(note_params)
        render json: note, status: :created
    end

    def show
        note = Note.find(params[:id])
        render json: note, status: :ok
    end

    def destroy
        note = Note.find(params[:id])
        note.delete
        head :no_content
    end

    private

    def note_params
        params.permit(:priority, :description, :project_task_id, :client_id, :contractor_id)
    end
    
    def render_not_found_response
        render json: { error: "Note not found" }, status: :not_found
    end
end
