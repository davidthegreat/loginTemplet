get 'users' do
  @users = User.all
  erb :'users/index'
end


get '/users/new' do
    erb :'users/new'
end

post '/users' do
  @user = User.create(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], email: params[:email],password: params[:password] )

    session[:id] = @user.id
    redirect "/users/#{@user.id}"

end

get '/users/:id' do
  @usser = find(params[:id])
  erb :'users/show'
end
