Category.create(name: "Animals", img: '/assets/sound-categories/elephant.png')
Category.create(name: "Nature", img: '/assets/sound-categories/nature.png')
Category.create(name: "Music", img: '/assets/sound-categories/guitar.png')
Category.create(name: "Space", img: '/assets/sound-categories/space.png')

# The below tracks are seeded with excelllent, unbeatable descriptions.
Track.create(title: "Elephants", artist: "Jeff Courwin", description: "This authentic field recording contains the sounds of the African landscape: birds chirp, insects hum, and an elephant sings.", category_id: 2, url: "https://s3.amazonaws.com/the-golden-record/Nature/Birds%2C+Hyena%2C+Elephant.wav", length: nil, composer: nil)

Track.create(title: "Soul Jazz", artist: "Michael Frederick", description: "American guitarist Michael Frederick enjoys a diverse career as a free-lance artist. Michael performs with award-winning ensembles throughout America, including the Po Boys Brass Band, Mrs. Skannotto, and The Mighty High and Dry, and he holds an advanced degree in music performance from the Eastman School of Music. Michael composed 'Soul Jazz' specifically for The Golden Record.", category_id: 3, url: "https://s3.amazonaws.com/the-golden-record/Music/Soul+Jazz-Mike+Frederick.mp3", length: nil, composer: nil)

Track.create(title: "Swing", artist: "Mike Frederick", description: "American guitarist Michael Frederick enjoys a diverse career as a free-lance artist. Michael performs with award-winning ensembles throughout America, including the Po Boys Brass Band, Mrs. Skannotto, and The Mighty High and Dry, and he holds an advanced degree in music performance from the Eastman School of Music. Michael composed 'Swing' specifically for The Golden Record.", category_id: 3, url: "https://s3.amazonaws.com/the-golden-record/Music/Swing-Mike+Frederick.mp3", length: nil, composer: nil)

Track.create(title: "Ballad", artist: "Mike Frederick", description: "American guitarist Michael Frederick enjoys a diverse career as a free-lance artist. Michael performs with award-winning ensembles throughout America, including the Po Boys Brass Band, Mrs. Skannotto, and The Mighty High and Dry, and he holds an advanced degree in music performance from the Eastman School of Music. Michael composed 'Ballad' specifically for The Golden Record.", category_id: 3, url: "https://s3.amazonaws.com/the-golden-record/Music/Ballad-Mike+Frederick.mp3", length: nil, composer: nil)

Track.create(title: "Bossa", artist: "Mike Frederick", description: "American guitarist Michael Frederick enjoys a diverse career as a free-lance artist. Michael performs with award-winning ensembles throughout America, including the Po Boys Brass Band, Mrs. Skannotto, and The Mighty High and Dry, and he holds an advanced degree in music performance from the Eastman School of Music. Michael composed 'Bossa' specifically for The Golden Record.", category_id: 3, url: "https://s3.amazonaws.com/the-golden-record/Music/Bossa-Mike+Frederick.mp3", length: nil, composer: nil)

Track.create(title: "Fourthy", artist: "Mike Frederick", description: "American guitarist Michael Frederick enjoys a diverse career as a free-lance artist. Michael performs with award-winning ensembles throughout America, including the Po Boys Brass Band, Mrs. Skannotto, and The Mighty High and Dry, and he holds an advanced degree in music performance from the Eastman School of Music. Michael composed 'Fourthy' specifically for The Golden Record.", category_id: 3, url: "https://s3.amazonaws.com/the-golden-record/Music/Fourthy-Mike+Frederick.mp3", length: nil, composer: nil)

Track.create(title: "Image, by Eugene Bozza (1905-1991)", artist: "Alice Jones", description: 'Raised in Austin, TX, flutist Alice Jones is known for giving performances that are “lively” (New York Times), "superb" (Carole Farley, soprano), and “delicate and passionate with beautiful articulation and dynamics” (Eleanor Cory, composer). An avid symphonic, chamber, theater, and contemporary musician, with performances ranging from the Brandenburg Concerti to New York City’s Look and Listen Festival, Alice performs regularly with the woodwind quintet Fiati Five, duo conText, and the Curiosity Cabinet. She has been a featured soloist and chamber musician at the Composers Now Festival at Symphony Space in New York City (2010 and 2011), the Yale-China Music Exchange in China (2007 and 2008), the Norfolk Chamber Music Festival (2010), and Chamber Music Campania in Italy (2013-2015). Alice holds degrees in music from Yale, SUNY Purchase, and the CUNY Graduate Center.', category_id: 3, url: "https://s3.amazonaws.com/the-golden-record/Music/Image+by+Eugene+Bozza-Alice+Jones.mp3", length: nil, composer: "Eugene Bozza")

Track.create(title: "Selat Segara", artist: "Gamelan Lila Muni", description: 'A traditional Indonesian percussion instrument, the gamelan consists of metal bars, hit with mallets by an ensemble of performers, producing a metallic, engergized sound. Members of the Gamelan Lila Muni (Heavenly Sound), a student-run group at the Eastman School of Music, perform on this recording.', category_id: 3, url: "https://s3.amazonaws.com/the-golden-record/Music/Selat+Segara-Eastman+Gamelan+Ensemble.mp3", length: nil, composer: nil)

# These need descriptions. Add more files, too.
Track.create(title: "Earth's Atmosphere Radio Emissions", artist: "NASA", description: "tbd", category_id: 4, url: "https://s3.amazonaws.com/the-golden-record/Space/RadioWavesonEarth%27sAtmosphere.mp3", length: nil, composer: nil)

Track.create(title: "Passing through Stardust", artist: "NASA", description: "tbd", category_id: 4, url: "https://s3.amazonaws.com/the-golden-record/Space/598980main_stardust_tempel1.mp3", length: nil, composer: nil)

Track.create(title: "Saturn's Radio Emissions", artist: "NASA", description: "tbd", category_id: 4, url: "https://s3.amazonaws.com/the-golden-record/Space/Cassini_Saturn_Radio_Emissions.mp3", length: nil, composer: nil)



