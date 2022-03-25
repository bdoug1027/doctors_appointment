Rails.application.routes.draw do
  
  namespace :api do
    resources :users

    get '/:id/doctors', to: 'users#doctors'
  end

end