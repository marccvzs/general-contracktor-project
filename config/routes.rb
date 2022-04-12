Rails.application.routes.draw do
  resources :notes, only: [:create, :show, :destroy]
  resources :project_tasks, only: [:index, :create, :show, :destroy]
  resources :room_imgs, only: [:create, :show, :destroy]
  resources :room_projects, only: [:index, :show, :create, :destroy]
  resources :projects, only: [:index, :show, :create, :destroy]
  resources :contractors, only: [:create, :show]
  resources :clients, only: [:create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/me/client/:id", to: "client#show"
  get "/me/contractor/:id", to: "contractor#show"

  get "/projects/:id", to: ""

  post "/login/client", to: "sessions#create_client"
  post "/login/contractor", to: "sessions#create_contractor"

  delete "/logout/client", to: "sessions#destroy_client"
  delete "/logout/contractor", to: "sessions#destroy_contractor"
  
  get '/hello', to: 'application#hello_world'
end
