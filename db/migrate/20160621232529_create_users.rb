class CreateUsers < ActiveRecord::Migration
  def change
  	create_table :users do |t|
  		t.string :first_name, presence: true
  		t.string :last_name, presence: true
  		t.string :username, :uniqueness => true, :presence => true
  		t.string :email, :uniqueness => true, :presence => true
  		t.string :password_hash, presence: true

  		t.timestamps
  	end
  end
end
