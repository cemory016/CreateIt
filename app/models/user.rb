class User < ApplicationRecord
    has_many :crafts, dependent: :destroy
end
