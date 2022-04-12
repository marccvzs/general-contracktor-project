class ApplicationController < ActionController::API
    include ActionController::Cookies 

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize

    private 

    def authorize 
        render json: { errors: "Not authorized" }, status: :unauthorized unless session.include? :client_id
    end 

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end 
end
