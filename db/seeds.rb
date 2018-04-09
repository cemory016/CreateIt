# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Comment.destroy_all
Craft.destroy_all

# USER
# t.string :firstName
# t.string :lastName
# t.string :email
# t.string :photo_url
# t.string :userName

billy = User.create!(firstName: 'Billy', lastName: 'Thorton', email: 'bt@gmail.com', userName: 'billThor3', photo_url: 'https://vignette.wikia.nocookie.net/p__/images/e/ef/Silly_Billy.jpg/revision/latest?cb=20140425173359&path-prefix=protagonist')
bob = User.create!(firstName: 'Bob', lastName: 'Ross', email: 'bobross@gmail.com', userName: 'bobrossboss', photo_url: 'https://pbs.twimg.com/profile_images/659863821163491328/nc8d847d.jpg')
betty = User.create!(firstName: 'Betty', lastName: 'Boop', email: 'bboop@gmail.com', userName: 'bettyboop', photo_url: 'https://media.boingboing.net/wp-content/uploads/2017/10/betty-boop-ellarie-01.jpg')

# CRAFT
# t.string :title
# t.string :photo_url
# t.string :link_url

yarnBalls = Craft.create!(title: 'yarn balls', photo_url: 'https://pgeveryday-com.secure.footprint.net/Assets/Modules/Editorial/Article/Images/diy-yarn-balls-1-size-3.jpg', link_url: 'https://www.pgeveryday.com/home/crafts/article/diy-yarn-balls', user_id: billy.id)
puts yarnBalls
fooseBallTable = Craft.create!(title: 'fooseBallTable', photo_url: 'https://www.momooze.com/wp-content/uploads/2016/09/0be347eac5dfc5be18e2311088201da8.jpg', link_url: 'https://www.momooze.com/kids-creative-crafts/8/', user_id: betty.id)

woodPhotoTrans = Craft.create!(title: 'wood transfer photo', photo_url: 'https://i2.wp.com/parentalperspective.com/wp-content/uploads/2015/12/Wood-Slice-Photo-Transfer-Silhouette-Tattoo-Paper-8.jpg?w=700', link_url: 'http://parentalperspective.com/diy-wood-slice-photo-transfer/', user_id: bob.id)

galaxyShoes = Craft.create!(title: 'galaxy shoes', photo_url: 'https://3.bp.blogspot.com/-jwjJH_JeNKA/UBRd0HPvFcI/AAAAAAAABJ4/PfeWF_ksbxY/s1600/9.jpg', link_url: 'https://timeforteabeads.blogspot.co.uk/2012/07/tutorial-14-make-it-week.html', user_id: betty.id)

storageBins = Craft.create!(title: 'Storage Bins', photo_url: 'https://i0.wp.com/www.busybliss.com/wp-content/uploads/2017/04/dollar-tree-storage-bins-pin.jpg?w=735&ssl=1', link_url: 'https://www.busybliss.com/dollar-tree-storage-bins/', user_id: bob.id)

slime = Craft.create!(title: 'slime', photo_url: 'https://sugarspiceandglitter.com/wp-content/uploads/2017/02/3-ingredient-fluffy-slime-recipe-1.jpg', link_url: 'https://sugarspiceandglitter.com/easy-3-ingredient-fluffy-slime/', user_id: betty.id)

flowerLetters = Craft.create!(title: 'Flower Letters', photo_url: 'https://2.bp.blogspot.com/-LHI2JWd0wzw/Vo7UrNfVuZI/AAAAAAAAKM8/FZNgtjsdUMs/s640/DSC_0264.jpg', link_url: 'http://www.notey.com/@thepamperedbabyblog_unofficial/external/9068425/diy-flower-monogram.html?utm_content=buffer612f9&utm_medium=social&utm_source=pinterest.com&utm_campaign=buffer', user_id: billy.id)

# # COMMENT
# t.string :title
# t.string :text
# belongs to crafts_id: craftDefinedAs.id


yarn = yarnBalls.comments.create!(title: 'my first craft YARN', text: "I love to craft! this is a great app! thanks for whomeever thought of this idea...now maybe I wont get overwhelmed with crafting ideas.")

# Comment.create!(title: 'my second craft FOOSE', text: "I love to craft! this is a great app! thanks for whomeever thought of this idea...now maybe I wont get overwhelmed with crafting ideas.", crafts_id: fooseBallTable.id)

# Comment.create!(title: 'my third craft woodPhotoTrans', text: "I love to craft! this is a great app! thanks for whomeever thought of this idea...now maybe I wont get overwhelmed with crafting ideas.", crafts_id: woodPhotoTrans.id)

# Comment.create!(title: 'my fourth craft galaxyShoes', text: "I love to craft! this is a great app! thanks for whomeever thought of this idea...now maybe I wont get overwhelmed with crafting ideas.", crafts_id: galaxyShoes.id)

# Comment.create!(title: 'my fith craft StorageBins', text: "I love to craft! this is a great app! thanks for whomeever thought of this idea...now maybe I wont get overwhelmed with crafting ideas.", crafts_id: storageBins.id)

# Comment.create!(title: 'my sixth craft Slime', text: "I love to craft! this is a great app! thanks for whomeever thought of this idea...now maybe I wont get overwhelmed with crafting ideas.", crafts_id: yarnBalls.id)

# Comment.create!(title: 'my seventh craft flowerLetters', text: "I love to craft! this is a great app! thanks for whomeever thought of this idea...now maybe I wont get overwhelmed with crafting ideas.", crafts_id: flowerLetters.id)