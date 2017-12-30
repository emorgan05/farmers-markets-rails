class Vendor < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  devise :omniauthable, omniauth_providers: %i[facebook]

  # associations
  has_many :items
  has_many :categories, through: :items
  has_many :market_vendors
  has_many :markets, through: :market_vendors

  # validations
  validates :description, length: { maximum: 255 }
  
  # omniauth methods
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |vendor|
      vendor.email = auth.info.email
      vendor.password = Devise.friendly_token[0,20]
      # vendor.name = auth.info.name   # assuming the user model has a name
      # vendor.image = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails,
      # uncomment the line below to skip the confirmation emails.
      # user.skip_confirmation!
    end
  end

  def self.new_with_session(params, session)
    super.tap do |vendor|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        vendor.email = data["email"] if vendor.email.blank?
      end
    end
  end

end
