/*
 * Structured transcription map for “Crabies” (91 pages).
 * Original student prose is loaded from assets/shrimpina-research/text.
 * Explicit project-team revisions are stored as structured source notes here.
 */
const SHRIMPINA_RESEARCH = (() => {
  const moduleBase = new URL('.', document.currentScript.src);
  const pageRange = (start, end) => Array.from({ length: end - start + 1 }, (_, index) => start + index);
  const pageFile = page => `assets/shrimpina-research/text/page-${String(page).padStart(3, '0')}.txt`;
  const figureCounts = {39:2,40:1,41:1,42:3,43:2,44:3,45:2,46:4,47:2,48:2,49:1,50:3,51:2,52:1,53:3,54:1,55:4,56:1,57:3,58:2,59:1,60:2,61:2,62:1,63:2,64:2,65:2,66:3,67:1,68:1,69:2,70:2,71:2,72:3,73:4,74:3,75:1,76:2,77:2,78:1,79:2,80:2,81:4,82:3,83:3,84:2,85:1,86:2,87:2,88:2,89:2,90:2,91:2};
  const figuresForPages = pages => pages.flatMap(page => Array.from({ length: figureCounts[page] || 0 }, (_, index) =>
    `assets/shrimpina-research/dna/page-${String(page).padStart(3, '0')}-${String(index).padStart(3, '0')}.png`
  ));
  const dna = (code, common, start, end) => {
    const pages = pageRange(start, end);
    return { code, common, pages, textFiles: pages.map(pageFile), figures: figuresForPages(pages) };
  };

  const speciesNotes = {
    'Callinectes sapidus': { common:'Atlantic blue crab', pages:[8,9] },
    'Ovalipes ocellatus': { common:'Lady Crab', pages:[11] },
    'Tumidotheres maculatus': { common:'Squatter Pea Crab', pages:[13] },
    'Libinia dubia': { common:'Longnose spider crab (Big - Punk rock)', pages:[15] },
    'Minuca pugnax': { common:'Atlantic Mud Fiddler Crab', pages:[19] },
    'Leptuca pugilator': { common:'Atlantic Sand Fiddler Crab', pages:[21] },
    'Pagurus longicarpus': { common:'Long-Clawed Hermit Crab', pages:[23] },
    'Pagurus pollicaris': { common:'Flat-Clawed Hermit Crab', pages:[25], updated:'2026-09-10', source:{
  "title": "Flat-Clawed Hermit Crab = Pagurus pollicaris",
  "order": [
    "Description",
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
    ]
  }
} },
    'Carcinus maenas': { common:'European Green Crab', pages:[27] },
    'Hemigrapsus sanguineus': { common:'Asian Shore Crab', pages:[29] }
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
    dnaBySample: {
      SSAJ13:dna('SSAJ13','Long-Clawed Hermit Crab',39,42),
      SSAJ20:dna('SSAJ20','Atlantic Marsh Fiddler Crab',43,45),
      SSAJ27:dna('SSAJ27','Asian Shore Crab',46,49),
      SSAJ39:dna('SSAJ39','Long-Clawed Hermit Crab',50,52),
      SSAJ43:dna('SSAJ43','Long-Clawed Hermit Crab',53,57),
      SSAJ48:dna('SSAJ48','Long-Clawed Hermit Crab',58,59),
      SSAJ51:dna('SSAJ51','Long-Clawed Hermit Crab',60,62),
      SSAJ52:dna('SSAJ52','Longnose Spider Crab',63,68),
      SSAJ53:dna('SSAJ53','Longnose Spider Crab',69,73),
      SSAJ54:dna('SSAJ54','Atlantic Sand Fiddler Crab',74,75),
      SSAJ55:dna('SSAJ55','Atlantic Sand Fiddler Crab',76,78),
      SSAJ65:dna('SSAJ65','Common Periwinkle',79,80),
      SSAJ66:dna('SSAJ66','Common Periwinkle',81,82),
      SSAJ67:dna('SSAJ67','Atlantic Sand Fiddler Crab',83,85)
    },
    dnaConclusions: {
      pages:[86,87,88], textFiles:[86,87,88].map(pageFile), figures:figuresForPages([86,87,88])
    },
    comparisonFigures: {
      pages:[89,90,91], textFiles:[89,90,91].map(pageFile), figures:figuresForPages([89,90,91])
    }
  };
})();
