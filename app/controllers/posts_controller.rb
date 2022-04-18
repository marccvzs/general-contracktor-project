class PostsController < ApplicationController
    
    def index 
        posts = Post.all
        render json: posts, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, include: :project, status: :created
    end

    private 

    def post_params
        params.permit(:client_id, :project_id)
    end
end
