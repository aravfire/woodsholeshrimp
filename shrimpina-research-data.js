/*
 * Structured transcription map for “Crabies” (91 pages).
 * Original student prose is loaded from assets/shrimpina-research/text.
 * Explicit project-team revisions are stored as structured source notes here.
 */
const SHRIMPINA_RESEARCH = (() => {
  const moduleBase = new URL('.', document.currentScript.src);
  const pageRange = (start, end) => Array.from({ length: end - start + 1 }, (_, index) => start + index);
  const pageFile = page => `assets/shrimpina-research/text/page-${String(page).padStart(3, '0')}.txt`;
  const dna = (code, common, consensusBp) => ({ code, common, consensusBp });

  const speciesNotes = {
  "Callinectes sapidus": {
    "common": "Atlantic blue crab",
    "pages": [
      8,
      9
    ],
    "textFiles": [
      "assets/shrimpina-research/text/page-008.txt",
      "assets/shrimpina-research/text/page-009.txt"
    ]
  },
  "Ovalipes ocellatus": {
    "common": "Lady Crab",
    "pages": [
      11
    ],
    "textFiles": [
      "assets/shrimpina-research/text/page-011.txt"
    ]
  },
  "Tumidotheres maculatus": {
    "common": "Squatter Pea Crab",
    "pages": [
      13
    ],
    "textFiles": [
      "assets/shrimpina-research/text/page-013.txt"
    ]
  },
  "Libinia dubia": {
    "common": "Longnose spider crab (Big - Punk rock)",
    "pages": [
      15
    ],
    "textFiles": [
      "assets/shrimpina-research/text/page-015.txt"
    ]
  },
  "Minuca pugnax": {
    "common": "Atlantic Mud Fiddler Crab",
    "pages": [
      19
    ],
    "textFiles": [
      "assets/shrimpina-research/text/page-019.txt"
    ]
  },
  "Leptuca pugilator": {
    "common": "Atlantic Sand Fiddler Crab",
    "pages": [
      21
    ],
    "textFiles": [
      "assets/shrimpina-research/text/page-021.txt"
    ]
  },
  "Pagurus longicarpus": {
    "common": "Long-Clawed Hermit Crab",
    "pages": [
      23
    ],
    "source": {
      "title": "Long-Clawed Hermit Crab = Pagurus longicarpus",
      "sections": {
        "Description": [
          "AKA Long-Armed Hermit Crab",
          "Body and Shell Use: Does not grow a hard shell over its entire abdomen. Instead, its abdomen is soft, curved, and vulnerable, so the crab lives inside an empty snail shell for protection. As it grows, it must periodically abandon its old shell and locate a larger one.",
          "Long Right Claw: Its most distinctive feature is the elongated right cheliped, or claw-bearing arm. The right claw is noticeably larger and much longer than the left, with a relatively narrow, stretched-out appearance. This gives the species its common name. The enlarged claw is usually long and slender rather than broad and flattened. The “hand” portion of the claw is elongated, and the entire appendage can project well beyond the opening of the shell when the crab is walking.",
          "Coloration: The body is commonly grayish, tan, olive, or brown, often with darker mottling. The legs may appear somewhat translucent and can have darker bands or speckles, allowing the crab to blend into sand, mud, and shell fragments.",
          "Small Size: Pagurus longicarpus is a relatively small hermit crab and is commonly found inhabiting small gastropod shells in shallow coastal environments.",
          "Habitat: Long-clawed hermit crabs are especially common in shallow bays, salt-marsh creeks, mudflats, sandy bottoms, and protected estuarine areas. Making them very well suited to the Woodneck–Little Sippewissett environment.",
          "Movement: When active, the crab extends its walking legs and enlarged claw from the shell and moves along the bottom while dragging the shell behind it. When disturbed, it can quickly withdraw its entire body into the shell.",
          "Shell Defense: Once retracted, the enlarged right claw can help partially block the shell opening, functioning almost like a defensive door against predators.",
          "Diet: Long-clawed hermit crabs are opportunistic omnivores and scavengers. They consume algae, detritus, small pieces of dead organisms, microorganisms, and other edible material found along the substrate.",
          "Shell Competition: Because suitable shells are limited, hermit crabs can compete intensely for them. Individuals may inspect other shells, fight over them, or exchange shells when a more appropriately sized one becomes available."
        ],
        "Location": [],
        "Notes": [
          "Seasonality:"
        ],
        "Ecology": [
          "Especially common in shallow bays, salt-marsh creeks, mudflats, sandy bottoms and protected estuaries. Making them very well suited to Woodneck and Little Sippewissett.",
          "Walks with its legs and long claw out while dragging the shell behind. If something disturbs it the whole body pulls back into the shell.",
          "The big right claw can partly block the opening like a door.",
          "Opportunistic omnivore and scavenger. Eats algae, detritus, dead organisms, microorganisms and other food along the bottom.",
          "Good shells are limited. Hermit crabs inspect other shells, fight over them or switch when a better size is available."
        ]
      },
      "order": [
        "Description",
        "Ecology",
        "Location",
        "Notes"
      ]
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 10,
      "sections": [
        "Ecology"
      ]
    }
  },
  "Pagurus pollicaris": {
    "common": "Flat-Clawed Hermit Crab",
    "pages": [
      25
    ],
    "updated": "2026-09-14",
    "source": {
      "title": "Flat-Clawed Hermit Crab = Pagurus pollicaris",
      "order": [
        "Description",
        "Ecology",
        "Location",
        "Notes"
      ],
      "sections": {
        "Description": [
          "AKA Flat-Clawed Hermit Crab / Gray Hermit Crab",
          "Body and Shell Use: Like the long-clawed hermit crab, it protects its soft asymmetrical abdomen inside an abandoned gastropod shell. They often occupy noticeably heavier and more robust snail shells.",
          "Broad Right Claw: The most useful identifying feature is the extremely large, broad, flattened claws. Rather than being long and narrow, the claw has a thick, almost shield-like appearance.",
          "“Flat-Clawed” Appearance: The enlarged right claw is noticeably compressed and flattened, especially across the palm. When the crab retreats into its shell, these claws can fit across the opening and act like a protective cover.",
          "Claw Comparison: This is the easiest distinction between the two species: Long-clawed hermit = long, narrow right claw. Flat-clawed hermit = broad, thick, flattened right claw.",
          "Larger and Heavier Build: The flat-clawed hermit crab generally has a more robust body and heavier appendages than the long-clawed species. Adults can also become considerably larger, so the difference can be very noticeable when mature individuals are compared.",
          "Coloration: The exposed portions of the body are typically gray, brown, tan, or reddish-brown. The large claw may appear grayish or pale with darker mottling, often giving the animal a rougher and more heavily armored appearance than P. longicarpus.",
          "Habitat: Flat-clawed hermit crabs are commonly found in shallow coastal waters, sandy bottoms, rocky areas, eelgrass beds, and the lower portions of estuaries. They may overlap with long-clawed hermit crabs, particularly near the more marine edges of marsh systems.",
          "Defense: The massive claw is particularly useful for defense. When threatened, the crab withdraws deeply into its borrowed shell and positions the flattened claw across the opening, making it much more difficult for a predator to reach the soft abdomen.",
          "Diet: Like the long-clawed hermit, it is an opportunistic scavenger and omnivore, feeding on algae, detritus, carrion, and small organisms encountered while searching the bottom.",
          "Shell Choice: Because P. pollicaris grows larger, it frequently requires larger gastropod shells. Shell availability can therefore place an important limit on where larger individuals can live and how successfully they can grow."
        ],
        "Location": [
          "Located in beach waters during low tide. Much deeper into the beach but it was accessible because the water was only knee deep."
        ],
        "Notes": [
          "Almost stepped on it, it looked like a rock. Nice rock. Pretty rock."
        ],
        "Ecology": [
          "Shallow coastal water, sandy bottoms, rocky areas, eelgrass and the lower part of estuaries.",
          "Can be in some of the same places as long-clawed hermit crabs, mostly closer to the marine edge of the marsh.",
          "The huge flat claw helps with defense. It pulls into the borrowed shell and puts the claw across the opening so predators have a harder time getting to the soft abdomen.",
          "Scavenger and omnivore. Eats algae, detritus, carrion and small organisms it finds on the bottom.",
          "Needs larger gastropod shells as it grows. If those shells are not there, larger crabs have fewer places they can live."
        ]
      }
    },
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 9,
      "sections": [
        "Ecology"
      ]
    }
  },
  "Carcinus maenas": {
    "common": "European Green Crab",
    "pages": [
      27
    ],
    "source": {
      "title": "European Green Crab = Carcinus maenas",
      "sections": {
        "Description": [
          "AKA Green Crab / European Shore Crab",
          "Carapace (Shell): has a broad, somewhat rounded or trapezoidal carapace that can reach about 3.5–3.6 inches wide. Despite its name, it is not always green; individuals may be dark green, olive, brown, tan, reddish-orange, or heavily mottled.",
          "Five Side Spines: One of the easiest identification features is the presence of five sharp lateral spines on each side of the carapace, immediately behind the eyes. There are also three rounded projections between the eyes. This is one of the best ways to distinguish it from the Asian shore crab.",
          "Claws: The claws are fairly stout and similar in overall size, making them useful for crushing and manipulating prey. They may show bluish coloration on the fingers along with darker markings. Unlike fiddler crabs, neither claw is specialized primarily for display.",
          "Habitat: European green crabs are commonly found in salt marshes, protected estuaries, sandy beaches, rocky shores, mudflats, and shallow subtidal areas. They tolerate a wide range of salinities, including fairly brackish conditions, which helps them thrive inside marsh systems.",
          "Diet: They are aggressive omnivorous predators and scavengers, feeding heavily on clams, mussels, oysters, snails, worms, smaller crustaceans, and carrion. Their ability to dig for buried shellfish makes them particularly damaging in areas with soft-bottom bivalves.",
          "Invasive Species: European green crabs are native to Europe and northern Africa and were introduced to eastern North America in the nineteenth century. They are now widespread throughout New England.",
          "Ecological Impact: Green crabs can reduce populations of shellfish, disturb eelgrass beds while digging and foraging, and damage salt-marsh creek banks. They are considered one of New England's most important invasive marine predators.",
          "Behavior: They are much more active and mobile than spider crabs and will often rapidly move sideways or raise their claws defensively when disturbed."
        ],
        "Location": [],
        "Notes": [],
        "Ecology": [
          "Common in salt marshes, protected estuaries, sandy beaches, rocky shores, mudflats and shallow water. They also tolerate brackish water.",
          "Aggressive predator and scavenger. Eats clams, mussels, oysters, snails, worms, small crustaceans and carrion. It can dig up buried shellfish.",
          "Native to Europe and northern Africa. Introduced to eastern North America in the 1800s and now widespread in New England.",
          "Green crabs can lower shellfish populations, dig through eelgrass and damage marsh creek banks.",
          "More active than spider crabs. When disturbed it can move sideways fast or hold its claws up."
        ]
      },
      "order": [
        "Description",
        "Ecology",
        "Location",
        "Notes"
      ]
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 8,
      "sections": [
        "Ecology"
      ]
    }
  },
  "Hemigrapsus sanguineus": {
    "common": "Asian Shore Crab",
    "pages": [
      29
    ],
    "source": {
      "title": "Asian Shore Crab = Hemigrapsus sanguineus",
      "sections": {
        "Description": [
          "AKA Japanese Shore Crab / Pacific Crab",
          "Carapace (Shell): The Asian shore crab has a distinctly square-shaped carapace. Adults are generally around 35–42 mm across, or roughly 1.5 inches. Color is highly variable and may include olive-green, brown, orange, maroon, purple, or reddish tones.",
          "Three Side Spines: The easiest structural distinction from a green crab is the presence of only three lateral spines on each side of the carapace. It also lacks the three prominent frontal teeth between the eyes that characterize the European green crab.",
          "Banded Legs: Perhaps the most noticeable field feature is the alternating light and dark bands along the walking legs. When turning over rocks several small crabs scatter, their striped legs make Asian shore crabs relatively easy to identify.",
          "Claws: The claws are comparatively small and may show reddish spots. Adult males also possess a distinctive fleshy, bulb-like structure near the base of the movable finger of each claw, which can help confirm identification.",
          "Rocky Habitat: Asian shore crabs are particularly associated with the rocky intertidal zone. They commonly hide underneath rocks, cobbles, shells, and other debris during low tide and rapidly scatter when their shelter is lifted. This contrasts somewhat with European green crabs, which are especially common across mud, sand, pebbles, marshes, and shallow subtidal habitat.",
          "Tolerance: Asian shore crabs tolerate a broad range of temperatures and salinities, helping them survive in variable intertidal environments where they are alternately submerged and exposed.",
          "Diet: They are opportunistic omnivores, eating algae, detritus, small mollusks, juvenile crustaceans, and other small organisms encountered beneath rocks and in the intertidal zone.",
          "Invasive Species: The species is native to the western Pacific, including the coasts of Japan, Korea, China, and Russia. It was first detected on the U.S. Atlantic coast in the late 1980s and had reached Massachusetts by the early 1990s. This species is firmly established around Cape Cod. USGS records include an Asian shore crab collected in the Atlantic Ocean at Woods Hole in 1992, as well as later records from Eel Pond and Falmouth.",
          "Competition With Green Crabs: Asian shore crabs overlap with European green crabs in parts of their habitat and can compete with them for food and shelter. Massachusetts sources specifically note that their arrival may reduce green-crab dominance in habitats where the two species overlap."
        ],
        "Location": [],
        "Notes": [],
        "Ecology": [
          "Rocky habitat: Usually in the rocky intertidal. They hide under rocks, cobbles, shells and debris at low tide, then scatter fast when the rock is lifted.",
          "They can handle a big range of temperatures and salinity. That helps when the same spot keeps going from underwater to exposed.",
          "Opportunistic omnivore. Eats algae, detritus, small mollusks, young crustaceans and other small organisms under rocks.",
          "Invasive species from the western Pacific. It reached the Atlantic coast in the late 1980s and Massachusetts by the early 1990s. It is established around Cape Cod.",
          "It overlaps with European green crabs in some places so they can compete for food and shelter."
        ]
      },
      "order": [
        "Description",
        "Ecology",
        "Location",
        "Notes"
      ]
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 7,
      "sections": [
        "Ecology"
      ]
    }
  },
  "Sporobolus alterniflorus": {
    "common": "Saltmarsh Cord Grass",
    "pages": [],
    "source": {
      "title": "Saltmarsh Cord Grass = Sporobolus alterniflorus",
      "order": [
        "Description",
        "Ecology"
      ],
      "sections": {
        "Description": [
          "AKA: Smooth Cordgrass / Spartina",
          "Stem and Leaves: This is the tall grass covering most of the edge of the marsh in our picture. It grows in very thick groups with long skinny leaves coming off of straight stems. The ends of the leaves come to a point.",
          "Coloration: Mostly green or yellow-green while it is growing and then turns more tan/brown later in the year.",
          "Roots and Rhizomes: Under the mud it has a large system of roots and rhizomes (underground stems). New pieces of grass can grow up from the rhizomes, which is why it forms such large patches instead of growing as one plant by itself.",
          "Salt: The leaves have small salt glands that get rid of extra salt. Making it able to live in areas that are covered by salt water over and over again."
        ],
        "Ecology": [
          "Habitat: Found in the low marsh, especially along tidal creeks and muddy edges. This part of the marsh floods regularly.",
          "Holding the Marsh Together: The roots grab onto the mud and the stems slow the water down. Sediment gets caught around the grass instead of all washing away.",
          "Other Animals: Fiddler crabs burrow between the stems and small fish use the flooded grass for cover. Snails, mussels, and insects are also all over these areas.",
          "After it Dies: Dead grass breaks into detritus and gets moved around by the tide. Small animals and microorganisms feed on it."
        ]
      }
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 1,
      "sections": [
        "Description",
        "Ecology"
      ]
    }
  },
  "Clathria prolifera": {
    "common": "Red Beard Sponge",
    "pages": [],
    "source": {
      "title": "Red Beard Sponge = Clathria prolifera",
      "order": [
        "Description",
        "Ecology"
      ],
      "sections": {
        "Description": [
          "Bright red/orange branches growing over each other. It looks kind of tangled which is probably where red beard comes from.",
          "In our picture it is growing around a shell. Grass and other stuff got caught around it too, so it does not have one even shape.",
          "There are lots of tiny holes in the body. Water goes in through the holes and moves through spaces inside.",
          "It is an animal but has no head or legs. Fibers and tiny hard pieces inside hold the branches up."
        ],
        "Ecology": [
          "Usually attached to something hard underwater, like oyster shells, rocks, docks, pilings or reefs.",
          "Filter feeder. Water comes through the pores and food gets taken out.",
          "Little shrimp, worms and crabs can hide between the branches.",
          "If too much mud covers the holes it is harder for the sponge to keep water moving."
        ]
      }
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 2,
      "sections": [
        "Description",
        "Ecology"
      ]
    }
  },
  "Diopatra cuprea": {
    "common": "Plumed Worm",
    "pages": [],
    "source": {
      "title": "Plumed Worm = Diopatra cuprea",
      "order": [
        "Description",
        "Ecology"
      ],
      "sections": {
        "Description": [
          "AKA Decorator Worm or Tube Worm",
          "The worm itself was mostly hidden. The part in our photo is its tube with shell pieces and beach material stuck to it.",
          "Inside of the tube is softer and almost parchment-like. Outside has sand, shell, seaweed and plant pieces. At first it just looks like a clump in the sand.",
          "Long segmented body down in the tube. The long parts around its head make the plumed look."
        ],
        "Ecology": [
          "Lives in sand or muddy sand in the intertidal and shallow water. Most of the tube is buried straight down.",
          "It collects whatever is close by and adds it to the top of the tube, so every tube can look a little different.",
          "Reaches out for algae, detritus and food around the opening.",
          "The top of the tube gives algae a place to attach and small animals can hide next to it.",
          "Fish and rays sometimes bite the exposed part. The worm can repair the tube and regrow damaged parts."
        ]
      }
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 3,
      "sections": [
        "Description",
        "Ecology"
      ]
    }
  },
  "pending:barnacles": {
    "common": "Barnacles",
    "pages": [],
    "source": {
      "title": "Barnacles = Amphibalanus venustus (working identification)",
      "order": [
        "Description",
        "Ecology"
      ],
      "sections": {
        "Description": [
          "iNaturalist has them under Amphibalanus venustus. The original register only said barnacles though, so this is still a working ID.",
          "Small cone shaped shells in a group. Several hard plates make the outside and the plates at the top open and shut.",
          "White/cream and brown with darker stripes up the sides. Some algae and sediment is on them.",
          "A few grew right against each other and came out uneven."
        ],
        "Ecology": [
          "Attaches to rocks, shells, boats, docks and other hard surfaces that stay in the water.",
          "When it is underwater the top opens and feathery legs called cirri catch plankton and tiny food.",
          "At low tide the plates close. Water stays inside so the soft animal does not dry out.",
          "Once attached it cannot move to a new spot. Barnacles, oysters, mussels and sponges can all be trying to use the same open surface."
        ]
      }
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 4,
      "sections": [
        "Description",
        "Ecology"
      ]
    },
    "scientificLabel": "Amphibalanus venustus (working identification)"
  },
  "Anomia simplex": {
    "common": "Common Jingle",
    "pages": [],
    "source": {
      "title": "Common Jingle = Anomia simplex",
      "order": [
        "Description",
        "Ecology"
      ],
      "sections": {
        "Description": [
          "AKA Jingle Shell / Potato Chip Shell",
          "Very thin and rounded but the edge is not completely even. Ours is pale gold and almost see through in the ruler photo.",
          "The upper half is curved. The bottom is flatter because it grows against whatever is under it.",
          "A hardened byssus goes through a hole in the bottom valve and holds it down.",
          "Only a few centimeters across in our photo and a lot thinner than the round clam."
        ],
        "Ecology": [
          "Found stuck to rocks, oyster shells, wood and docks in shallow coastal water. We saw them around oysters.",
          "Suspension feeder. It takes phytoplankton and other small particles out of the water.",
          "Larvae swim before settling. Really small jingles can detach and move again, but the larger ones stay attached."
        ]
      }
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 5,
      "sections": [
        "Description",
        "Ecology"
      ]
    }
  },
  "Mercenaria mercenaria": {
    "common": "Round Clam (Northern Quahog)",
    "pages": [],
    "source": {
      "title": "Round Clam (Northern Quahog) = Mercenaria mercenaria",
      "order": [
        "Description",
        "Ecology"
      ],
      "sections": {
        "Description": [
          "Also called a hard clam or quahog.",
          "Thick heavy shell with a rounded triangle shape. The two valves are about the same size and close tight.",
          "Curved growth lines start near the raised hinge and go across the shell. They are the first thing that stood out in our picture.",
          "Outside was cream/tan to gray with darker marks between some lines.",
          "It has a muscular foot for digging. The siphons stay closer to the surface so water can go in and out while the clam is buried."
        ],
        "Ecology": [
          "Buried in sand, mud or both in bays and estuaries. Adults do not move much once they settle.",
          "Filters plankton and microorganisms from water coming in through the siphons.",
          "The thick shell and being buried help protect adults. Small clams still get eaten by crabs, fish, sea stars, snails and birds.",
          "Eggs and sperm are released into the water. Larvae drift and later settle on the bottom and start making a shell."
        ]
      }
    },
    "updated": "2026-09-14",
    "revision": {
      "pdf": "assets/shrimpina-research/species-notes-20260914/shrimpina-species-notes.pdf",
      "page": 6,
      "sections": [
        "Description",
        "Ecology"
      ]
    }
  }
};
  Object.values(speciesNotes).forEach(note => {
    note.textFiles = note.pages.map(pageFile);
  });

  return {
    assetUrl: path => new URL(path, moduleBase).href,
    source: {
      title: 'Crabies',
      pages: 91,
      original: '/Users/johnsellers/Downloads/Crabies .pdf',
      manifest: 'assets/shrimpina-research/source-manifest.json'
    },
    researchQuestion: 'How are the morphological characteristics among crab species in Little Sippewissett Marsh and Woodneck Beach results of their role and place within the community?',
    researchMedia: {
      marshFilm: {
        title:'Little Sippewissett Marsh',
        src:'assets/shrimpina-media/little-sippewissett-marsh.mp4',
        poster:'assets/shrimpina-media/little-sippewissett-marsh-poster.jpg',
        durationSeconds:57.962667,
        source:'motion-final-fixed.mp4'
      }
    },
    comparisons: [
      {
        title:'Rough Comparisons: Fiddler Crabs',
        columns:['','Mud fiddler','Sand fiddler'],
        rows:[
          ['Male large claw','Pale yellow / cream','Paler white-cream, often with orange/red/pink tones'],
          ['Body','Dark brown/gray, often blue near front','Highly variable; gray, blue, white, purple, pinkish or reddish'],
          ['Habitat','Muddy marsh among grasses','Sandier, more open marsh/beach margins'],
          ['Overall impression','Dark body + conspicuous yellow claw','Lighter/more colorful, often reddish-purple']
        ]
      },
      {
        title:'Rough Comparisons: Hermit Crabs',
        columns:['','Long-Clawed Hermit','Flat-Clawed Hermit'],
        rows:[
          ['Claws','Long, narrow, elongated','Broad, thick, flattened'],
          ['General build','Smaller, more delicate','Larger, more robust'],
          ['Typical habitat','Mudflats, marsh creeks, protected shallows','Sandier/rockier, more marine shallows'],
          ['Defense','Retreats into shell; claw partially blocks opening','Large flat claw acts almost like a shield'],
          ['Field impression','“Long-armed”','“Big-handed”']
        ]
      },
      {
        title:'Rough Comparisons: Invasive Species',
        columns:['','European Green Crab','Asian Shore Crab'],
        rows:[
          ['Carapace shape','Broad, rounded/trapezoidal','Square'],
          ['Side spines','5 on each side','3 on each side'],
          ['Between eyes','3 frontal teeth','No comparable frontal teeth'],
          ['Legs','Usually unbanded','Distinct light/dark bands'],
          ['Typical size','Larger, up to ~3.5 in','Smaller, usually ~1.5 in'],
          ['Common habitat','Mud, sand, marsh, rocks','Especially under rocks/cobbles'],
          ['Origin','Europe/North Africa','Western Pacific'],
          ['Status here','Invasive','Invasive']
        ]
      }
    ],
    speciesNotes,
    fieldVisits: [
      ['Mon., Aug. 24\n10:00 AM–12:30 PM','~73–76°F','Warm, generally dry; likely partly sunny/cloudy','Light–moderate coastal breeze'],
      ['Tue., Aug. 25\n12:00–2:00 PM','~71–73°F','Mild, dry; some cloud cover','Light–moderate breeze'],
      ['Thu., Aug. 27\n1:00–3:30 PM','~76–77°F','Warm, mostly cloudy/overcast','Moderate coastal breeze'],
      ['Mon., Aug. 31\n3:30–5:30 PM','~70–72°F','Overcast, following wetter conditions earlier in the day','~11–12 mph, gustier at times'],
      ['Wed., Sept. 2\n6:20–7:50 PM','~69°F, falling toward 68°F','Cloudy/overcast, dry during this period','Breezy; evening conditions noticeably cooler']
    ],
    taxonomyTree: {
      phylum:'Arthropoda', className:'Malacostraca', order:'Decapoda', suborder:'Pleocyemata',
      summary:'8 families · 9 genera · 10 species',
      branches:[
        { name:'Brachyura', note:'“true crabs”', families:[
          { name:'Ovalipidae', genera:[{ name:'Ovalipes', species:[['Ocellate Lady Crab','Ovalipes ocellatus']] }]},
          { name:'Portunidae', genera:[{ name:'Callinectes', species:[['Atlantic Blue Crab','Callinectes sapidus']] }]},
          { name:'Carcinidae', genera:[{ name:'Carcinus', species:[['European Green Crab','Carcinus maenas']] }]},
          { name:'Ocypodidae', genera:[
            { name:'Minuca', species:[['Mud Fiddler Crab','Minuca pugnax']] },
            { name:'Leptuca', species:[['Sand Fiddler Crab','Leptuca pugilator']] }
          ]},
          { name:'Varunidae', genera:[{ name:'Hemigrapsus', species:[['Asian Shore Crab','Hemigrapsus sanguineus']] }]},
          { name:'Epialtidae', genera:[{ name:'Libinia', species:[['Longnose Spider Crab','Libinia dubia']] }]},
          { name:'Pinnotheridae', genera:[{ name:'Tumidotheres', species:[['Squatter Pea Crab','Tumidotheres maculatus']] }]}
        ]},
        { name:'Anomura', note:'“hermit crabs”', families:[
          { name:'Paguridae', genera:[{ name:'Pagurus', species:[
            ['Flat-Clawed Hermit Crab','Pagurus pollicaris'],
            ['Long-Clawed Hermit Crab','Pagurus longicarpus']
          ]}]}
        ]}
      ]
    },
    taxonomyEcology: {
      'Ovalipes ocellatus': { zone:'Aquatic', invasive:false },
      'Callinectes sapidus': { zone:'Aquatic', invasive:false },
      'Carcinus maenas': { zone:'Transitional', invasive:true },
      'Minuca pugnax': { zone:'Intertidal', invasive:false },
      'Leptuca pugilator': { zone:'Intertidal', invasive:false },
      'Hemigrapsus sanguineus': { zone:'Intertidal', invasive:true },
      'Libinia dubia': { zone:'Aquatic', invasive:false },
      'Tumidotheres maculatus': { zone:'Aquatic', invasive:false },
      'Pagurus pollicaris': { zone:'Transitional', invasive:false },
      'Pagurus longicarpus': { zone:'Transitional', invasive:false }
    },
    phylogenyTree: {
      "title": "Final Phylogeny Tree",
      "outgroup": "Marsh Grass Shrimp",
      "root": {
        "x": 56,
        "children": [
          {
            "x": 223,
            "children": [
              {
                "x": 336,
                "children": [
                  {
                    "x": 493,
                    "children": [
                      {
                        "x": 623,
                        "children": [
                          {
                            "x": 694,
                            "children": [
                              {
                                "code": "SSAJ52",
                                "common": "Longnose Spider Crab",
                                "sci": "Libinia dubia"
                              },
                              {
                                "code": "SSAJ53",
                                "common": "Longnose Spider Crab",
                                "sci": "Libinia dubia"
                              }
                            ]
                          },
                          {
                            "code": "SSAJ84",
                            "common": "Squatter Pea Crab",
                            "sci": "Tumidotheres maculatus"
                          }
                        ]
                      },
                      {
                        "x": 627,
                        "children": [
                          {
                            "code": "SSAJ33",
                            "common": "Ocellate Lady Crab",
                            "sci": "Ovalipes ocellatus"
                          },
                          {
                            "code": "SSAJ74",
                            "common": "Ocellate Lady Crab",
                            "sci": "Ovalipes ocellatus"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "x": 527,
                    "children": [
                      {
                        "x": 619,
                        "children": [
                          {
                            "code": "SSAJ43",
                            "common": "Long-Clawed Hermit Crab",
                            "sci": "Pagurus longicarpus"
                          },
                          {
                            "code": "SSAJ13",
                            "common": "Long-Clawed Hermit Crab",
                            "sci": "Pagurus longicarpus"
                          },
                          {
                            "x": 702,
                            "children": [
                              {
                                "code": "SSAJ51",
                                "common": "Long-Clawed Hermit Crab",
                                "sci": "Pagurus longicarpus"
                              },
                              {
                                "code": "SSAJ39",
                                "common": "Long-Clawed Hermit Crab",
                                "sci": "Pagurus longicarpus"
                              }
                            ]
                          },
                          {
                            "code": "SSAJ48",
                            "common": "Long-Clawed Hermit Crab",
                            "sci": "Pagurus longicarpus"
                          }
                        ]
                      },
                      {
                        "code": "SSAJ36",
                        "common": "Long-Clawed Hermit Crab",
                        "sci": "Pagurus longicarpus"
                      }
                    ]
                  }
                ]
              },
              {
                "code": "SSAJ27",
                "common": "Asian Shore Crab",
                "sci": "Hemigrapsus sanguineus"
              }
            ]
          },
          {
            "x": 433,
            "children": [
              {
                "x": 571,
                "children": [
                  {
                    "x": 644,
                    "children": [
                      {
                        "code": "SSAJ55",
                        "common": "Sand Fiddler Crab",
                        "sci": "Leptuca pugilator"
                      },
                      {
                        "code": "SSAJ54",
                        "common": "Sand Fiddler Crab",
                        "sci": "Leptuca pugilator"
                      }
                    ]
                  },
                  {
                    "code": "SSAJ67",
                    "common": "Sand Fiddler Crab",
                    "sci": "Leptuca pugilator"
                  }
                ]
              },
              {
                "x": 588,
                "children": [
                  {
                    "code": "SSAJ21",
                    "common": "Mud Fiddler Crab",
                    "sci": "Minuca pugnax"
                  },
                  {
                    "code": "SSAJ20",
                    "common": "Mud Fiddler Crab",
                    "sci": "Minuca pugnax"
                  }
                ]
              }
            ]
          },
          {
            "common": "Marsh Grass Shrimp",
            "outgroup": true
          }
        ]
      }
    },
    geneticSource: {"title": "Updated Project Genetic Analysis", "url": "https://docs.google.com/document/d/1ACkk_uQ7eIpqDTffv_BCSUpoui6p8xZwNfPKI2WzvXs/edit", "updated": "2026-09-14", "data": "assets/shrimpina-research/genetics-20260914/analysis.json"},
    dnaBySample: {
      SSAJ13:dna('SSAJ13',"Long-Clawed Hermit Crab",532),
      SSAJ20:dna('SSAJ20',"Atlantic Marsh Fiddler Crab",614),
      SSAJ21:dna('SSAJ21',"Atlantic Marsh Fiddler Crab",628),
      SSAJ27:dna('SSAJ27',"Asian Shore Crab",438),
      SSAJ33:dna('SSAJ33',"Lady Crab",546),
      SSAJ36:dna('SSAJ36',"Long-Clawed Hermit Crab",612),
      SSAJ39:dna('SSAJ39',"Long-Clawed Hermit Crab",580),
      SSAJ43:dna('SSAJ43',"Long-Clawed Hermit Crab",579),
      SSAJ48:dna('SSAJ48',"Long-Clawed Hermit Crab",590),
      SSAJ51:dna('SSAJ51',"Long-Clawed Hermit Crab",590),
      SSAJ52:dna('SSAJ52',"Longnose Spider Crab",631),
      SSAJ53:dna('SSAJ53',"Longnose Spider Crab",604),
      SSAJ54:dna('SSAJ54',"Atlantic Sand Fiddler Crab",614),
      SSAJ55:dna('SSAJ55',"Atlantic Sand Fiddler Crab",618),
      SSAJ65:dna('SSAJ65',"Common Periwinkle",578),
      SSAJ66:dna('SSAJ66',"Common Periwinkle",592),
      SSAJ67:dna('SSAJ67',"Atlantic Sand Fiddler Crab",624),
      SSAJ74:dna('SSAJ74',"Lady Crab",532),
      SSAJ84:dna('SSAJ84',"Squatter Pea Crab",574)
    }
  };
})();
