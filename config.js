var config = {
    style: 'mapbox://styles/arsneaz/clrhgbid800in01pe46g6dmiu',
    accessToken: 'pk.eyJ1IjoiYXJzbmVheiIsImEiOiJjbHFrdm10eW8xams1MmlvMGJ6ZWdoMHEyIn0.MvEZLZFd474Qz5cM-p5W5A',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Tentang Desa',
    subtitle: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    byline: 'By a Digital Storyteller',
    chapters: [
        {
            id: 'Wonosari',
            alignment: 'left',
            hidden: false,
            title: 'Wonosari',
            image: 'images/wonosari.jpg',
            description: 'Kampung Wonosari merupakan daerah pemekaran dari Kampung Komering Putih. Pemekaran dilakukan pada tahun 1994. Menjadi Kampung Definitif dari tahun 1994-2000. Dinamakan Wonosari karena yang mengusulkan untuk membuka berasal dari Wonosari Gunung Kidul Yogyakarta yang mana Wonosari memiliki arti dimana Wono adalah Ladang atau Alas dan Sari adalah Rasa.',
            location: {
                center: [105.14228, -5.05268],
                zoom: 13,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'wonosari',
                    opacity: 0.7
                }
            ],
            onChapterExit: [
                {
                    layer: 'wonosari',
                    opacity: 0
                }
              ]
        },
        {
            id: 'Perdusun',
            alignment: 'right',
            hidden: false,
            title: 'Pembagian Dusun',
            description: 'Kampung Wonosari terbagi menjadi 4 Dusun, yaitu Dusun 1 Margoyoso pada daerah yang ditandai warna biru, Dusun 2 Yosodadi pada daerah yang ditandai warna merah, Dusun 3 Mulyosari pada daerah yang ditandai warna kuning, Dusun 4 Banyumas pada daerah yang ditandai warna hijau.',
            location: {
                center: [105.18242, -5.05247],
                zoom: 13,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dusun1-zoom',
                    opacity: 0.5
                },
                {
                    layer: 'dusun2',
                    opacity: 0.5
                },
                {
                    layer: 'dusun3',
                    opacity: 0.5
                },
                {
                    layer: 'dusun4',
                    opacity: 0.5
                }
              ],
              onChapterExit: [
                {
                    layer: 'dusun1-zoom',
                    opacity: 0
                },
                {
                    layer: 'dusun2',
                    opacity: 0
                },
                {
                    layer: 'dusun3',
                    opacity: 0
                },
                {
                    layer: 'dusun4',
                    opacity: 0
                }
              ]
        },
        {
            id: 'Dusun-1',
            alignment: 'left',
            hidden: false,
            title: 'Dusun 1 Margoyoso',
            location: {
                center: [105.14045, -5.05251],
                zoom: 13.7,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dusun1',
                    opacity: 0.5
                }
              ],
              onChapterExit: [
                {
                    layer: 'dusun1',
                    opacity: 0
                }
              ]
        },
        {
            id: 'Dusun-2',
            alignment: 'right',
            hidden: false,
            title: 'Dusun 2 Yosodadi',
            location: {
                center: [105.18331, -5.05394],
                zoom: 13.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dusun2',
                    opacity: 0.5
                }
              ],
              onChapterExit: [
                {
                    layer: 'dusun2',
                    opacity: 0
                }
              ]
        },
        {
            id: 'Dusun-3',
            alignment: 'left',
            hidden: false,
            title: 'Dusun 3 Mulyosari',
            location: {
                center: [105.14080, -5.06340],
                zoom: 14,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dusun3',
                    opacity: 0.5
                }
              ],
              onChapterExit: [
                {
                    layer: 'dusun3',
                    opacity: 0
                }
              ]
        },
        {
            id: 'Dusun-4',
            alignment: 'right',
            hidden: false,
            title: 'Dusun 4 Banyumas',
            location: {
                center: [105.16722, -5.04170],
                zoom: 14,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dusun4',
                    opacity: 0.5
                }
              ],
              onChapterExit: [
                {
                    layer: 'dusun4',
                    opacity: 0
                }
              ]
        },
    ]
};
