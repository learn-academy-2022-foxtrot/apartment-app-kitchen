require "rails_helper"

RSpec.describe "Apartments", type: :request do
  let(:user) { User.create email: "test@example.com", password: "password", password_confirmation: "password" }

  # -----index-----
  describe "GET /index" do
    it "gets all the apartments" do
      apartment = Apartment.new(
        street: "124 Conch Street",
        city: "Bikini Bottom",
        state: "Pacific Ocean",
        manager: "Mustachio Jones",
        email: "mjones@example.com",
        price: "1000 sand dollars",
        bedrooms: 2,
        bathrooms: 2,
        pets: "yes",
        image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG",
        user_id: user.id
      )
      apartment.save
      get "/apartments"
      apartments = JSON.parse(response.body)
      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)
      apartment = apartments.first
      expect(apartment["street"]).to eq "124 Conch Street"
      expect(apartment["city"]).to eq "Bikini Bottom"
      expect(apartment["state"]).to eq "Pacific Ocean"
      expect(apartment["manager"]).to eq "Mustachio Jones"
      expect(apartment["email"]).to eq "mjones@example.com"
    end
  end

  # -----Create-----
  describe "POST /create" do
    it "Creates an apartment" do
      apartment_params = {
        apartment: {
          street: "123 street",
          city: "Las Vegas",
          state: "NV",
          manager: "Billy Bob",
          email: "coolguy@gmail.com",
          price: "2000 euros",
          bedrooms: 2,
          bathrooms: 1,
          pets: "No",
          image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG",
          user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      apartment = Apartment.first
      p "apartments are cool:", apartment
      expect(response).to have_http_status(200)
      expect(apartment.street).to eq "123 street"
      expect(apartment.city).to eq "Las Vegas"
      expect(apartment.state).to eq "NV"
      expect(apartment.manager).to eq "Billy Bob"
      expect(apartment.email).to eq "coolguy@gmail.com"
      expect(apartment.price).to eq "2000 euros"
      expect(apartment.bedrooms).to eq 2
      expect(apartment.bathrooms).to eq 1
      expect(apartment.pets).to eq "No"
      expect(apartment.image).to eq "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    end
  end

  # -----Update-----

  describe "PATCH /update" do 
    it "updates an apartment" do 
      apartment_params = {
        apartment: {
        street: "123 street",
        city: "Las Vegas",
        state: "NV",
        manager: "Billy Bob",
        email: "coolguy@gmail.com",
        price: "2000 euros",
        bedrooms: 2,
        bathrooms: 1,
        pets: "No",
        image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG",
        user_id: user.id
        }
    }
  
    post '/apartments', params: apartment_params
      apartment = Apartment.first
      p "apartment", apartment
  
    update_apartment_params = {
      apartment: {
      street: "990 Update Street",
      city: "Las Vegas",
      state: "NV",
      manager: "Billy Bob",
      email: "coolguy@gmail.com",
      price: "2000 euros",
      bedrooms: 2,
      bathrooms: 1,
      pets: "No",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG",
      user_id: user.id
      }
    }
  
    put "/apartments/#{apartment.id}", params: update_apartment_params
    apartment = Apartment.first
    p "apartment", apartment
  
   expect(apartment.street).to eq("990 Update Street")
      
    end 
  end 

end
