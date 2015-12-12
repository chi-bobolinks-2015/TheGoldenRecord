Category.create(name: "NASA", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png")
Category.create(name: "Music", image: "http://www.i2clipart.com/cliparts/8/8/c/a/clipart-bass-clef-256x256-88ca.png")

Track.create(title: "Space Rain", artist: "Jeff Spacely", description: "A one of a kind recording of a storm in space. You may think it sounds a lot like an earth storm, but that's really just your opinion.", category_id: 1, url: "https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav", length: nil, composer: nil)
Track.create(title: "Musical Elephants", artist: "Jeff Courwin", description: "A one of a kind recording of an elephant singing. You may think it sounds a lot like an elephant proper, but that's really just your opinion.", category_id: 2, url: "https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav", length: nil, composer: nil)
