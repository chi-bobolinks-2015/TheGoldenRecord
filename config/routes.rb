Rails.application.routes.draw do

  root 'tracks#index'
  get 'tracks' => 'tracks#index'
  get 'tracks/:id/edit' => 'tracks#edit', as: 'edit_track'
  get 'shhhh' => 'amazon#index'


end
