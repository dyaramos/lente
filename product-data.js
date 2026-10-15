/* ==================================================
   PRODUCTS DATABASE — LENTE
   Complete data for all 71 products
================================================== */

const PRODUCTS = {

    /* ==================================================
       CANON (15)
    ================================================== */

    'canon-eos-r50': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R50',
        price: 38998, oldPrice: 42999, discount: '-10%',
        rating: 4.8, reviews: 225,
        image: 'images/products/canon-eos-r50.png',
        gallery: ['images/products/canon-eos-r50.png'],
        desc: 'Built for creators who want more, the EOS R50 pairs a 24.2MP sensor with Dual Pixel CMOS AF II for fast, reliable autofocus in both stills and 4K video.',
        specs: {
            'Sensor': '24.2MP APS-C CMOS',
            'Processor': 'DIGIC X',
            'ISO Range': '100–32000 (expandable to 51200)',
            'Autofocus': 'Dual Pixel CMOS AF II, 651 points',
            'Video': '4K UHD 30p, Full HD 120p',
            'Display': '3.0" Vari-angle touchscreen',
            'Weight': '375g (body only)'
        }
    },

    'canon-eos-r10': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R10',
        price: 46999, oldPrice: 51999, discount: '-8%',
        rating: 4.8, reviews: 118,
        image: 'images/products/canon-eos-r10.png',
        gallery: ['images/products/canon-eos-r10.png'],
        desc: 'The EOS R10 is a lightweight mirrorless camera with a 24.2MP APS-C sensor, perfect for enthusiasts who want speed and portability.',
        specs: {
            'Sensor': '24.2MP APS-C CMOS',
            'Processor': 'DIGIC X',
            'ISO Range': '100–32000',
            'Video': '4K UHD 60p',
            'Display': '3.0" Vari-angle touchscreen',
            'Weight': '429g (body only)'
        }
    },

    'canon-eos-r8': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R8',
        price: 89999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 92,
        image: 'images/products/canon-eos-r8.png',
        gallery: ['images/products/canon-eos-r8.png'],
        desc: 'A compact full-frame mirrorless camera with a 24.2MP sensor and 4K 60p video — ideal for hybrid shooters.',
        specs: {
            'Sensor': '24.2MP Full-Frame CMOS',
            'Processor': 'DIGIC X',
            'ISO Range': '100–102400',
            'Video': '4K UHD 60p',
            'Display': '3.0" Vari-angle touchscreen',
            'Weight': '461g (body only)'
        }
    },

    'canon-eos-r6-ii': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R6 Mark II',
        price: 142999, oldPrice: 150999, discount: '-5%',
        rating: 4.9, reviews: 178,
        image: 'images/products/canon-eos-r6-ii.png',
        gallery: ['images/products/canon-eos-r6-ii.png'],
        desc: 'A versatile full-frame mirrorless with 24.2MP sensor, 40fps burst, and 6K oversampled 4K video.',
        specs: {
            'Sensor': '24.2MP Full-Frame CMOS',
            'Processor': 'DIGIC X',
            'Video': '4K 60p (6K oversampled)',
            'Burst': '40fps electronic',
            'Weight': '670g (body only)'
        }
    },

    'canon-eos-r5': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R5',
        price: 249999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 203,
        image: 'images/products/canon-eos-r5.png',
        gallery: ['images/products/canon-eos-r5.png'],
        desc: 'A 45MP full-frame powerhouse capable of 8K video and 20fps burst — the ultimate hybrid camera.',
        specs: {
            'Sensor': '45MP Full-Frame CMOS',
            'Processor': 'DIGIC X',
            'Video': '8K 30p RAW / 4K 120p',
            'Weight': '738g (body only)'
        }
    },

    'canon-eos-r3': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R3',
        price: 349999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 67,
        image: 'images/products/canon-eos-r3.png',
        gallery: ['images/products/canon-eos-r3.png'],
        desc: 'A professional-grade mirrorless with stacked 24MP sensor, 30fps burst, and Eye Control AF.',
        specs: {
            'Sensor': '24.1MP Stacked Full-Frame',
            'Processor': 'DIGIC X',
            'Video': '6K 60p RAW',
            'Weight': '1015g (body only)'
        }
    },

    'canon-eos-r100': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R100',
        price: 27999, oldPrice: 31999, discount: '-12%',
        rating: 4.6, reviews: 154,
        image: 'images/products/canon-eos-r100.png',
        gallery: ['images/products/canon-eos-r100.png'],
        desc: 'An entry-level mirrorless camera for beginners, with a 24.1MP APS-C sensor and 4K video.',
        specs: {
            'Sensor': '24.1MP APS-C CMOS',
            'Processor': 'DIGIC 8',
            'Video': '4K UHD 24p',
            'Weight': '356g (body only)'
        }
    },

    'canon-eos-r7': {
        brand: 'Canon', category: 'Mirrorless', name: 'Canon EOS R7',
        price: 99999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 143,
        image: 'images/products/canon-eos-r7.png',
        gallery: ['images/products/canon-eos-r7.png'],
        desc: 'A high-performance APS-C mirrorless designed for sports and wildlife with 32.5MP and 30fps burst.',
        specs: {
            'Sensor': '32.5MP APS-C CMOS',
            'Processor': 'DIGIC X',
            'Video': '4K 60p',
            'Weight': '612g (body only)'
        }
    },

    'canon-eos-5d-iv': {
        brand: 'Canon', category: 'DSLR', name: 'Canon EOS 5D Mark IV',
        price: 189999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 312,
        image: 'images/products/canon-eos-5d-iv.png',
        gallery: ['images/products/canon-eos-5d-iv.png'],
        desc: 'The legendary 5D Mark IV — a 30.4MP full-frame DSLR trusted by professionals worldwide.',
        specs: {
            'Sensor': '30.4MP Full-Frame CMOS',
            'Processor': 'DIGIC 6+',
            'Video': '4K 30p',
            'Weight': '890g (body only)'
        }
    },

    'canon-eos-90d': {
        brand: 'Canon', category: 'DSLR', name: 'Canon EOS 90D',
        price: 79999, oldPrice: 85999, discount: '-7%',
        rating: 4.8, reviews: 198,
        image: 'images/products/canon-eos-90d.png',
        gallery: ['images/products/canon-eos-90d.png'],
        desc: 'A 32.5MP APS-C DSLR with 10fps burst and 4K video, perfect for enthusiasts.',
        specs: {
            'Sensor': '32.5MP APS-C CMOS',
            'Processor': 'DIGIC 8',
            'Video': '4K UHD 30p',
            'Weight': '701g (body only)'
        }
    },

    'canon-eos-250d': {
        brand: 'Canon', category: 'DSLR', name: 'Canon EOS 250D',
        price: 44999, oldPrice: 49999, discount: '-10%',
        rating: 4.6, reviews: 267,
        image: 'images/products/canon-eos-250d.png',
        gallery: ['images/products/canon-eos-250d.png'],
        desc: 'The world\'s lightest DSLR with a vari-angle screen — a great starting point for beginners.',
        specs: {
            'Sensor': '24.1MP APS-C CMOS',
            'Processor': 'DIGIC 8',
            'Video': '4K UHD 24p',
            'Weight': '449g (body only)'
        }
    },

    'canon-eos-850d': {
        brand: 'Canon', category: 'DSLR', name: 'Canon EOS 850D',
        price: 56999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 145,
        image: 'images/products/canon-eos-850d.png',
        gallery: ['images/products/canon-eos-850d.png'],
        desc: 'A mid-range DSLR with 24.1MP sensor, 45-point AF, and 4K video.',
        specs: {
            'Sensor': '24.1MP APS-C CMOS',
            'Processor': 'DIGIC 8',
            'Video': '4K UHD 30p',
            'Weight': '515g (body only)'
        }
    },

    'canon-g7x-mark-iii': {
        brand: 'Canon', category: 'Compact', name: 'Canon PowerShot G7 X Mark III',
        price: 42999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 189,
        image: 'images/products/canon-g7x-mark-iii.png',
        gallery: ['images/products/canon-g7x-mark-iii.png'],
        desc: 'A premium compact camera ideal for vloggers, with 20.1MP sensor and 4K video.',
        specs: {
            'Sensor': '20.1MP 1" CMOS',
            'Zoom': '4.2x Optical',
            'Video': '4K UHD 30p',
            'Weight': '304g'
        }
    },

    'canon-sx740': {
        brand: 'Canon', category: 'Compact', name: 'Canon PowerShot SX740 HS',
        price: 25999, oldPrice: 27999, discount: '-8%',
        rating: 4.5, reviews: 231,
        image: 'images/products/canon-sx740.png',
        gallery: ['images/products/canon-sx740.png'],
        desc: 'A travel-friendly compact with 40x optical zoom and 4K video.',
        specs: {
            'Sensor': '20.3MP CMOS',
            'Zoom': '40x Optical',
            'Video': '4K UHD 30p',
            'Weight': '299g'
        }
    },

    'canon-powershot-v10': {
        brand: 'Canon', category: 'Compact', name: 'Canon PowerShot V10',
        price: 24999, oldPrice: null, discount: null,
        rating: 4.6, reviews: 112,
        image: 'images/products/canon-powershot-v10.png',
        gallery: ['images/products/canon-powershot-v10.png'],
        desc: 'A pocket-sized vlogging camera with built-in stand and 4K video.',
        specs: {
            'Sensor': '13.1MP 1" CMOS',
            'Video': '4K UHD 30p',
            'Weight': '211g'
        }
    },

    /* ==================================================
       SONY (15)
    ================================================== */

    'sony-a7-iv': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 7 IV',
        price: 129999, oldPrice: 140999, discount: '-8%',
        rating: 4.9, reviews: 287,
        image: 'images/products/sony-a7-iv.png',
        gallery: ['images/products/sony-a7-iv.png'],
        desc: 'A hybrid full-frame mirrorless with 33MP sensor, 4K 60p, and AI-based autofocus.',
        specs: {
            'Sensor': '33MP Full-Frame Exmor R',
            'Processor': 'BIONZ XR',
            'Video': '4K 60p',
            'Weight': '658g (body only)'
        }
    },

    'sony-a7r-v': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 7R V',
        price: 219999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 156,
        image: 'images/products/sony-a7r-v.png',
        gallery: ['images/products/sony-a7r-v.png'],
        desc: 'A 61MP high-resolution full-frame mirrorless with AI processing unit.',
        specs: {
            'Sensor': '61MP Full-Frame Exmor R',
            'Processor': 'BIONZ XR',
            'Video': '8K 24p / 4K 60p',
            'Weight': '723g (body only)'
        }
    },

    'sony-a7c-ii': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 7C II',
        price: 107999, oldPrice: 119999, discount: '-10%',
        rating: 4.8, reviews: 142,
        image: 'images/products/sony-a7c-ii.png',
        gallery: ['images/products/sony-a7c-ii.png'],
        desc: 'A compact full-frame mirrorless with 33MP sensor and AI autofocus.',
        specs: {
            'Sensor': '33MP Full-Frame Exmor R',
            'Processor': 'BIONZ XR',
            'Video': '4K 60p',
            'Weight': '514g (body only)'
        }
    },

    'sony-alpha-6700': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 6700',
        price: 79999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 76,
        image: 'images/products/sony-alpha-6700.png',
        gallery: ['images/products/sony-alpha-6700.png'],
        desc: 'A versatile APS-C mirrorless with 26MP sensor and AI-based subject recognition.',
        specs: {
            'Sensor': '26MP APS-C Exmor R',
            'Processor': 'BIONZ XR',
            'Video': '4K 120p',
            'Weight': '493g (body only)'
        }
    },

    'sony-a6400': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 6400',
        price: 42999, oldPrice: 47999, discount: '-10%',
        rating: 4.8, reviews: 134,
        image: 'images/products/sony-a6400.png',
        gallery: ['images/products/sony-a6400.png'],
        desc: 'A popular APS-C mirrorless with 24.2MP sensor, real-time Eye AF, and 4K video.',
        specs: {
            'Sensor': '24.2MP APS-C Exmor CMOS',
            'Processor': 'BIONZ X',
            'Video': '4K UHD 30p',
            'Weight': '403g (body only)'
        }
    },

    'sony-a6100': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 6100',
        price: 36999, oldPrice: null, discount: null,
        rating: 4.6, reviews: 187,
        image: 'images/products/sony-a6100.png',
        gallery: ['images/products/sony-a6100.png'],
        desc: 'A compact entry-level APS-C mirrorless with 24.2MP sensor and 4K video.',
        specs: {
            'Sensor': '24.2MP APS-C Exmor CMOS',
            'Processor': 'BIONZ X',
            'Video': '4K UHD 30p',
            'Weight': '396g (body only)'
        }
    },

    'sony-alpha-1': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 1',
        price: 329999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 98,
        image: 'images/products/sony-alpha-1.png',
        gallery: ['images/products/sony-alpha-1.png'],
        desc: 'A flagship full-frame mirrorless with 50MP sensor, 8K video, and 30fps burst.',
        specs: {
            'Sensor': '50.1MP Full-Frame Exmor RS',
            'Processor': 'BIONZ XR',
            'Video': '8K 30p / 4K 120p',
            'Weight': '737g (body only)'
        }
    },

    'sony-a9-iii': {
        brand: 'Sony', category: 'Mirrorless', name: 'Sony Alpha 9 III',
        price: 389999, oldPrice: null, discount: null,
        rating: 5.0, reviews: 45,
        image: 'images/products/sony-a9-iii.png',
        gallery: ['images/products/sony-a9-iii.png'],
        desc: 'The world\'s first full-frame mirrorless with global shutter — 24.6MP and 120fps burst.',
        specs: {
            'Sensor': '24.6MP Full-Frame Global Shutter',
            'Processor': 'BIONZ XR',
            'Video': '4K 120p',
            'Burst': '120fps blackout-free',
            'Weight': '702g (body only)'
        }
    },

    'sony-zv-e10-ii': {
        brand: 'Sony', category: 'Vlog', name: 'Sony ZV-E10 II',
        price: 54999, oldPrice: 64999, discount: '-15%',
        rating: 4.7, reviews: 189,
        image: 'images/products/sony-zv-e10-ii.png',
        gallery: ['images/products/sony-zv-e10-ii.png'],
        desc: 'The ultimate vlogging camera with 26MP APS-C sensor, AI-powered autofocus, and cinematic 4K video.',
        specs: {
            'Sensor': '26MP APS-C Exmor R',
            'Processor': 'BIONZ XR',
            'Video': '4K 60p / FHD 120p',
            'Weight': '377g (body only)'
        }
    },

    'sony-zv-1-ii': {
        brand: 'Sony', category: 'Vlog', name: 'Sony ZV-1 II',
        price: 46999, oldPrice: 50999, discount: '-8%',
        rating: 4.6, reviews: 134,
        image: 'images/products/sony-zv-1-ii.png',
        gallery: ['images/products/sony-zv-1-ii.png'],
        desc: 'A compact vlogging camera with 18-50mm equivalent zoom and 4K video.',
        specs: {
            'Sensor': '20.1MP 1" Exmor RS',
            'Zoom': '2.6x Optical',
            'Video': '4K UHD 30p',
            'Weight': '292g'
        }
    },

    'sony-zv-e1': {
        brand: 'Sony', category: 'Vlog', name: 'Sony ZV-E1',
        price: 149999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 112,
        image: 'images/products/sony-zv-e1.png',
        gallery: ['images/products/sony-zv-e1.png'],
        desc: 'A full-frame vlogging camera with 12MP sensor, AI processing, and 4K 120p.',
        specs: {
            'Sensor': '12.1MP Full-Frame Exmor R',
            'Processor': 'BIONZ XR',
            'Video': '4K 120p',
            'Weight': '483g (body only)'
        }
    },

    'sony-zv-1f': {
        brand: 'Sony', category: 'Vlog', name: 'Sony ZV-1F',
        price: 27999, oldPrice: null, discount: null,
        rating: 4.5, reviews: 203,
        image: 'images/products/sony-zv-1f.png',
        gallery: ['images/products/sony-zv-1f.png'],
        desc: 'An entry-level vlogging camera with fixed 20mm lens and 4K video.',
        specs: {
            'Sensor': '20.1MP 1" Exmor RS',
            'Lens': 'Fixed 20mm f/2.0',
            'Video': '4K UHD 30p',
            'Weight': '256g'
        }
    },

    'sony-rx100-vii': {
        brand: 'Sony', category: 'Compact', name: 'Sony RX100 VII',
        price: 62999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 176,
        image: 'images/products/sony-rx100-vii.png',
        gallery: ['images/products/sony-rx100-vii.png'],
        desc: 'A premium compact with 1" sensor, 24-200mm zoom, and real-time tracking AF.',
        specs: {
            'Sensor': '20.1MP 1" Exmor RS',
            'Zoom': '8.3x Optical',
            'Video': '4K UHD 30p',
            'Weight': '302g'
        }
    },

    'sony-rx10-iv': {
        brand: 'Sony', category: 'Compact', name: 'Sony RX10 IV',
        price: 89999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 89,
        image: 'images/products/sony-rx10-iv.png',
        gallery: ['images/products/sony-rx10-iv.png'],
        desc: 'A bridge camera with 24-600mm zoom and 1" stacked sensor.',
        specs: {
            'Sensor': '20.1MP 1" Exmor RS',
            'Zoom': '25x Optical',
            'Video': '4K UHD 30p',
            'Weight': '1095g'
        }
    },

    'sony-rx100-v': {
        brand: 'Sony', category: 'Compact', name: 'Sony RX100 V',
        price: 44999, oldPrice: 47999, discount: '-5%',
        rating: 4.6, reviews: 124,
        image: 'images/products/sony-rx100-v.png',
        gallery: ['images/products/sony-rx100-v.png'],
        desc: 'A compact camera with 1" sensor, fast 24-70mm lens, and 24fps burst.',
        specs: {
            'Sensor': '20.1MP 1" Exmor RS',
            'Zoom': '2.9x Optical',
            'Video': '4K UHD 30p',
            'Weight': '299g'
        }
    },

    /* ==================================================
       NIKON (15)
    ================================================== */

    'nikon-z8': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z8',
        price: 189999, oldPrice: 199999, discount: '-5%',
        rating: 4.9, reviews: 187,
        image: 'images/products/nikon-z8.png',
        gallery: ['images/products/nikon-z8.png'],
        desc: 'A professional full-frame mirrorless with 45.7MP sensor, 8K video, and pro-grade autofocus.',
        specs: {
            'Sensor': '45.7MP Full-Frame Stacked CMOS',
            'Processor': 'EXPEED 7',
            'Video': '8K 30p / 4K 120p',
            'Weight': '910g (body only)'
        }
    },

    'nikon-z9': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z9',
        price: 329999, oldPrice: null, discount: null,
        rating: 5.0, reviews: 98,
        image: 'images/products/nikon-z9.png',
        gallery: ['images/products/nikon-z9.png'],
        desc: 'The flagship Z-series camera with 45.7MP stacked sensor, 8K video, and 120fps burst.',
        specs: {
            'Sensor': '45.7MP Full-Frame Stacked CMOS',
            'Processor': 'EXPEED 7',
            'Video': '8K 30p / 4K 120p',
            'Burst': '120fps',
            'Weight': '1340g (body only)'
        }
    },

    'nikon-z6-iii': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z6 III',
        price: 139999, oldPrice: 152999, discount: '-8%',
        rating: 4.8, reviews: 145,
        image: 'images/products/nikon-z6-iii.png',
        gallery: ['images/products/nikon-z6-iii.png'],
        desc: 'A hybrid full-frame mirrorless with 24.5MP partially-stacked sensor and 6K video.',
        specs: {
            'Sensor': '24.5MP Full-Frame Partially-Stacked',
            'Processor': 'EXPEED 7',
            'Video': '6K 60p / 4K 120p',
            'Weight': '760g (body only)'
        }
    },

    'nikon-z7-ii': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z7 II',
        price: 149999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 156,
        image: 'images/products/nikon-z7-ii.png',
        gallery: ['images/products/nikon-z7-ii.png'],
        desc: 'A high-resolution full-frame mirrorless with 45.7MP sensor and dual card slots.',
        specs: {
            'Sensor': '45.7MP Full-Frame CMOS',
            'Processor': 'Dual EXPEED 6',
            'Video': '4K UHD 60p',
            'Weight': '705g (body only)'
        }
    },

    'nikon-z5-ii': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z5 II',
        price: 89999, oldPrice: 99999, discount: '-10%',
        rating: 4.7, reviews: 203,
        image: 'images/products/nikon-z5-ii.png',
        gallery: ['images/products/nikon-z5-ii.png'],
        desc: 'An affordable full-frame mirrorless with 24.3MP sensor and dual card slots.',
        specs: {
            'Sensor': '24.3MP Full-Frame CMOS',
            'Processor': 'EXPEED 6',
            'Video': '4K UHD 30p',
            'Weight': '675g (body only)'
        }
    },

    'nikon-z50': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z50',
        price: 49999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 91,
        image: 'images/products/nikon-z50.png',
        gallery: ['images/products/nikon-z50.png'],
        desc: 'A compact DX-format mirrorless that delivers excellent image quality in a lightweight body.',
        specs: {
            'Sensor': '20.9MP DX-Format CMOS',
            'Processor': 'EXPEED 6',
            'Video': '4K UHD 30p',
            'Weight': '395g (body only)'
        }
    },

    'nikon-z30': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z30',
        price: 42999, oldPrice: 48999, discount: '-12%',
        rating: 4.6, reviews: 178,
        image: 'images/products/nikon-z30.png',
        gallery: ['images/products/nikon-z30.png'],
        desc: 'A vlogger-friendly DX mirrorless with flip-out screen and no EVF.',
        specs: {
            'Sensor': '20.9MP DX-Format CMOS',
            'Processor': 'EXPEED 6',
            'Video': '4K UHD 30p',
            'Weight': '405g (body only)'
        }
    },

    'nikon-zfc': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Z fc',
        price: 54999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 234,
        image: 'images/products/nikon-zfc.png',
        gallery: ['images/products/nikon-zfc.png'],
        desc: 'A retro-styled DX mirrorless with 20.9MP sensor and classic dial controls.',
        specs: {
            'Sensor': '20.9MP DX-Format CMOS',
            'Processor': 'EXPEED 6',
            'Video': '4K UHD 30p',
            'Weight': '445g (body only)'
        }
    },

    'nikon-zf': {
        brand: 'Nikon', category: 'Mirrorless', name: 'Nikon Zf',
        price: 119999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 112,
        image: 'images/products/nikon-zf.png',
        gallery: ['images/products/nikon-zf.png'],
        desc: 'A retro-styled full-frame mirrorless with 24.5MP sensor and 8-stop IBIS.',
        specs: {
            'Sensor': '24.5MP Full-Frame CMOS',
            'Processor': 'EXPEED 7',
            'Video': '4K UHD 60p',
            'Weight': '710g (body only)'
        }
    },

    'nikon-d850': {
        brand: 'Nikon', category: 'DSLR', name: 'Nikon D850',
        price: 199999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 287,
        image: 'images/products/nikon-d850.png',
        gallery: ['images/products/nikon-d850.png'],
        desc: 'A 45.7MP full-frame DSLR — the ultimate choice for high-resolution photography.',
        specs: {
            'Sensor': '45.7MP Full-Frame CMOS',
            'Processor': 'EXPEED 5',
            'Video': '4K UHD 30p',
            'Weight': '1005g (body only)'
        }
    },

    'nikon-d780': {
        brand: 'Nikon', category: 'DSLR', name: 'Nikon D780',
        price: 129999, oldPrice: 139999, discount: '-7%',
        rating: 4.8, reviews: 156,
        image: 'images/products/nikon-d780.png',
        gallery: ['images/products/nikon-d780.png'],
        desc: 'A versatile full-frame DSLR with 24.5MP sensor and mirrorless-style AF in Live View.',
        specs: {
            'Sensor': '24.5MP Full-Frame CMOS',
            'Processor': 'EXPEED 6',
            'Video': '4K UHD 30p',
            'Weight': '840g (body only)'
        }
    },

    'nikon-d7500': {
        brand: 'Nikon', category: 'DSLR', name: 'Nikon D7500',
        price: 89999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 156,
        image: 'images/products/nikon-d7500.png',
        gallery: ['images/products/nikon-d7500.png'],
        desc: 'An enthusiast-level DX DSLR with 20.9MP sensor and 8fps burst.',
        specs: {
            'Sensor': '20.9MP DX-Format CMOS',
            'Processor': 'EXPEED 5',
            'Video': '4K UHD 30p',
            'Weight': '640g (body only)'
        }
    },

    'nikon-d5600': {
        brand: 'Nikon', category: 'DSLR', name: 'Nikon D5600',
        price: 54999, oldPrice: 57999, discount: '-5%',
        rating: 4.6, reviews: 234,
        image: 'images/products/nikon-d5600.png',
        gallery: ['images/products/nikon-d5600.png'],
        desc: 'A beginner-friendly DX DSLR with 24.2MP sensor and vari-angle touchscreen.',
        specs: {
            'Sensor': '24.2MP DX-Format CMOS',
            'Processor': 'EXPEED 4',
            'Video': '1080p Full HD 60p',
            'Weight': '465g (body only)'
        }
    },

    'nikon-p1000': {
        brand: 'Nikon', category: 'Compact', name: 'Nikon Coolpix P1000',
        price: 64999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 189,
        image: 'images/products/nikon-p1000.png',
        gallery: ['images/products/nikon-p1000.png'],
        desc: 'A superzoom bridge camera with an insane 125x optical zoom.',
        specs: {
            'Sensor': '16MP 1/2.3" CMOS',
            'Zoom': '125x Optical',
            'Video': '4K UHD 30p',
            'Weight': '1415g'
        }
    },

    'nikon-p950': {
        brand: 'Nikon', category: 'Compact', name: 'Nikon Coolpix P950',
        price: 49999, oldPrice: 55999, discount: '-10%',
        rating: 4.6, reviews: 145,
        image: 'images/products/nikon-p950.png',
        gallery: ['images/products/nikon-p950.png'],
        desc: 'A bridge camera with 83x optical zoom and 4K video.',
        specs: {
            'Sensor': '16MP 1/2.3" CMOS',
            'Zoom': '83x Optical',
            'Video': '4K UHD 30p',
            'Weight': '1005g'
        }
    },

    /* ==================================================
       FUJIFILM (15)
    ================================================== */

    'fujifilm-x100vi': {
        brand: 'Fujifilm', category: 'Digicam', name: 'Fujifilm X100VI',
        price: 89999, oldPrice: 99999, discount: '-12%',
        rating: 4.9, reviews: 102,
        image: 'images/products/fujifilm-x100vi.png',
        gallery: ['images/products/fujifilm-x100vi.png'],
        desc: 'The iconic X100 series returns with a 40.2MP sensor, in-body stabilization, and legendary film simulations.',
        specs: {
            'Sensor': '40.2MP APS-C X-Trans CMOS 5 HR',
            'Processor': 'X-Processor 5',
            'Video': '6.2K 30p',
            'Weight': '521g (with battery)'
        }
    },

    'fujifilm-xt5': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-T5',
        price: 109999, oldPrice: 119999, discount: '-8%',
        rating: 4.9, reviews: 187,
        image: 'images/products/fujifilm-xt5.png',
        gallery: ['images/products/fujifilm-xt5.png'],
        desc: 'A classic-styled mirrorless with 40.2MP sensor and 7-stop IBIS.',
        specs: {
            'Sensor': '40.2MP APS-C X-Trans CMOS 5 HR',
            'Processor': 'X-Processor 5',
            'Video': '6.2K 30p',
            'Weight': '557g (body only)'
        }
    },

    'fujifilm-xh2s': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-H2S',
        price: 149999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 145,
        image: 'images/products/fujifilm-xh2s.png',
        gallery: ['images/products/fujifilm-xh2s.png'],
        desc: 'A video-focused mirrorless with 26.1MP stacked sensor and 6.2K video.',
        specs: {
            'Sensor': '26.1MP APS-C Stacked X-Trans',
            'Processor': 'X-Processor 5',
            'Video': '6.2K 30p / 4K 120p',
            'Weight': '660g (body only)'
        }
    },

    'fujifilm-xh2': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-H2',
        price: 129999, oldPrice: 136999, discount: '-5%',
        rating: 4.8, reviews: 156,
        image: 'images/products/fujifilm-xh2.png',
        gallery: ['images/products/fujifilm-xh2.png'],
        desc: 'A high-resolution mirrorless with 40.2MP sensor and 8K video.',
        specs: {
            'Sensor': '40.2MP APS-C X-Trans CMOS 5 HR',
            'Processor': 'X-Processor 5',
            'Video': '8K 30p',
            'Weight': '660g (body only)'
        }
    },

    'fujifilm-xt30-ii': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-T30 II',
        price: 54999, oldPrice: 61999, discount: '-10%',
        rating: 4.8, reviews: 203,
        image: 'images/products/fujifilm-xt30-ii.png',
        gallery: ['images/products/fujifilm-xt30-ii.png'],
        desc: 'A compact mirrorless with 26.1MP sensor and retro dials.',
        specs: {
            'Sensor': '26.1MP APS-C X-Trans CMOS 4',
            'Processor': 'X-Processor 4',
            'Video': '4K UHD 30p',
            'Weight': '378g (body only)'
        }
    },

    'fujifilm-xt50': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-T50',
        price: 74999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 98,
        image: 'images/products/fujifilm-xt50.png',
        gallery: ['images/products/fujifilm-xt50.png'],
        desc: 'A mid-range mirrorless with 40.2MP sensor and dedicated film simulation dial.',
        specs: {
            'Sensor': '40.2MP APS-C X-Trans CMOS 5 HR',
            'Processor': 'X-Processor 5',
            'Video': '6.2K 30p',
            'Weight': '438g (body only)'
        }
    },

    'fujifilm-xs20': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-S20',
        price: 79999, oldPrice: 86999, discount: '-7%',
        rating: 4.7, reviews: 145,
        image: 'images/products/fujifilm-xs20.png',
        gallery: ['images/products/fujifilm-xs20.png'],
        desc: 'A vlogger-focused mirrorless with 26.1MP sensor and 6.2K video.',
        specs: {
            'Sensor': '26.1MP APS-C X-Trans CMOS 4',
            'Processor': 'X-Processor 5',
            'Video': '6.2K 30p',
            'Weight': '491g (body only)'
        }
    },

    'fujifilm-xe4': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-E4',
        price: 49999, oldPrice: null, discount: null,
        rating: 4.6, reviews: 167,
        image: 'images/products/fujifilm-xe4.png',
        gallery: ['images/products/fujifilm-xe4.png'],
        desc: 'A rangefinder-style mirrorless with 26.1MP sensor and compact body.',
        specs: {
            'Sensor': '26.1MP APS-C X-Trans CMOS 4',
            'Processor': 'X-Processor 4',
            'Video': '4K UHD 30p',
            'Weight': '364g (body only)'
        }
    },

    'fujifilm-xpro3': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm X-Pro3',
        price: 99999, oldPrice: 110999, discount: '-10%',
        rating: 4.7, reviews: 124,
        image: 'images/products/fujifilm-xpro3.png',
        gallery: ['images/products/fujifilm-xpro3.png'],
        desc: 'A rangefinder-style mirrorless with hybrid viewfinder and hidden LCD.',
        specs: {
            'Sensor': '26.1MP APS-C X-Trans CMOS 4',
            'Processor': 'X-Processor 4',
            'Video': '4K UHD 30p',
            'Weight': '497g (body only)'
        }
    },

    'fujifilm-gfx100-ii': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm GFX 100 II',
        price: 389999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 76,
        image: 'images/products/fujifilm-gfx100-ii.png',
        gallery: ['images/products/fujifilm-gfx100-ii.png'],
        desc: 'A medium-format mirrorless with 102MP sensor and 8K video.',
        specs: {
            'Sensor': '102MP Medium Format CMOS II',
            'Processor': 'X-Processor 5',
            'Video': '8K 30p',
            'Weight': '1030g (body only)'
        }
    },

    'fujifilm-gfx50s-ii': {
        brand: 'Fujifilm', category: 'Mirrorless', name: 'Fujifilm GFX 50S II',
        price: 229999, oldPrice: 249999, discount: '-8%',
        rating: 4.8, reviews: 89,
        image: 'images/products/fujifilm-gfx50s-ii.png',
        gallery: ['images/products/fujifilm-gfx50s-ii.png'],
        desc: 'An affordable medium-format mirrorless with 51.4MP sensor and IBIS.',
        specs: {
            'Sensor': '51.4MP Medium Format CMOS',
            'Processor': 'X-Processor 4',
            'Video': '1080p Full HD',
            'Weight': '900g (body only)'
        }
    },

    'fujifilm-x100v': {
        brand: 'Fujifilm', category: 'Digicam', name: 'Fujifilm X100V',
        price: 79999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 234,
        image: 'images/products/fujifilm-x100v.png',
        gallery: ['images/products/fujifilm-x100v.png'],
        desc: 'The modern classic — 26.1MP sensor, tilting screen, and legendary film simulations.',
        specs: {
            'Sensor': '26.1MP APS-C X-Trans CMOS 4',
            'Processor': 'X-Processor 4',
            'Video': '4K UHD 30p',
            'Weight': '478g'
        }
    },

    'fujifilm-xf10': {
        brand: 'Fujifilm', category: 'Digicam', name: 'Fujifilm XF10',
        price: 33999, oldPrice: 39999, discount: '-15%',
        rating: 4.5, reviews: 156,
        image: 'images/products/fujifilm-xf10.png',
        gallery: ['images/products/fujifilm-xf10.png'],
        desc: 'A pocket-sized APS-C compact with fixed 28mm lens.',
        specs: {
            'Sensor': '24.2MP APS-C CMOS',
            'Lens': 'Fixed 18.5mm f/2.8',
            'Video': '4K UHD 15p',
            'Weight': '279g'
        }
    },

    'fujifilm-instax-mini-12': {
        brand: 'Fujifilm', category: 'Film', name: 'Fujifilm Instax Mini 12',
        price: 8999, oldPrice: 9999, discount: '-5%',
        rating: 4.5, reviews: 198,
        image: 'images/products/fujifilm-instax-mini-12.png',
        gallery: ['images/products/fujifilm-instax-mini-12.png'],
        desc: 'An instant camera with automatic exposure and close-up mode.',
        specs: {
            'Film': 'Instax Mini',
            'Lens': '60mm f/12.7',
            'Flash': 'Automatic',
            'Weight': '306g'
        }
    },

    'fujifilm-instax-wide-400': {
        brand: 'Fujifilm', category: 'Film', name: 'Fujifilm Instax Wide 400',
        price: 12999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 112,
        image: 'images/products/fujifilm-instax-wide-400.png',
        gallery: ['images/products/fujifilm-instax-wide-400.png'],
        desc: 'An instant camera that shoots wide format photos.',
        specs: {
            'Film': 'Instax Wide',
            'Lens': '95mm f/14',
            'Flash': 'Automatic',
            'Weight': '616g'
        }
    },

    /* ==================================================
       KODAK (15)
    ================================================== */

    'kodak-pixpro-fz55': {
        brand: 'Kodak', category: 'Digicam', name: 'KODAK PIXPRO FZ55',
        price: 12999, oldPrice: null, discount: null,
        rating: 4.6, reviews: 330,
        image: 'images/products/kodak-pixpro-fz55.png',
        gallery: ['images/products/kodak-pixpro-fz55.png'],
        desc: 'A friendly point-and-shoot with 16MP sensor and 5x optical zoom, perfect for everyday photography.',
        specs: {
            'Sensor': '16MP CMOS',
            'Zoom': '5x Optical',
            'Video': '1080p Full HD',
            'Weight': '117g'
        }
    },

    'kodak-pixpro-fz45': {
        brand: 'Kodak', category: 'Digicam', name: 'KODAK PIXPRO FZ45',
        price: 11999, oldPrice: 12999, discount: '-5%',
        rating: 4.5, reviews: 203,
        image: 'images/products/kodak-pixpro-fz45.png',
        gallery: ['images/products/kodak-pixpro-fz45.png'],
        desc: 'A budget-friendly compact with 16MP sensor and 4x optical zoom.',
        specs: {
            'Sensor': '16MP CMOS',
            'Zoom': '4x Optical',
            'Video': '1080p Full HD',
            'Weight': '117g'
        }
    },

    'kodak-pixpro-az405': {
        brand: 'Kodak', category: 'Compact', name: 'KODAK PIXPRO AZ405',
        price: 18999, oldPrice: 20999, discount: '-8%',
        rating: 4.7, reviews: 178,
        image: 'images/products/kodak-pixpro-az405.png',
        gallery: ['images/products/kodak-pixpro-az405.png'],
        desc: 'A bridge camera with 40x optical zoom and 20MP sensor.',
        specs: {
            'Sensor': '20MP CMOS',
            'Zoom': '40x Optical',
            'Video': '1080p Full HD',
            'Weight': '436g'
        }
    },

    'kodak-pixpro-az255': {
        brand: 'Kodak', category: 'Compact', name: 'KODAK PIXPRO AZ255',
        price: 16999, oldPrice: null, discount: null,
        rating: 4.5, reviews: 145,
        image: 'images/products/kodak-pixpro-az255.png',
        gallery: ['images/products/kodak-pixpro-az255.png'],
        desc: 'A bridge camera with 25x optical zoom and 16MP sensor.',
        specs: {
            'Sensor': '16MP CMOS',
            'Zoom': '25x Optical',
            'Video': '1080p Full HD',
            'Weight': '336g'
        }
    },

    'kodak-pixpro-wpz2': {
        brand: 'Kodak', category: 'Compact', name: 'KODAK PIXPRO WPZ2',
        price: 13999, oldPrice: 15999, discount: '-10%',
        rating: 4.6, reviews: 189,
        image: 'images/products/kodak-pixpro-wpz2.png',
        gallery: ['images/products/kodak-pixpro-wpz2.png'],
        desc: 'A waterproof, shockproof compact camera with 16MP sensor.',
        specs: {
            'Sensor': '16MP CMOS',
            'Zoom': '4x Optical',
            'Waterproof': 'Up to 15m',
            'Weight': '176g'
        }
    },

    'kodak-pixpro-fz55-blue': {
        brand: 'Kodak', category: 'Digicam', name: 'KODAK PIXPRO FZ55 — Blue',
        price: 13499, oldPrice: null, discount: null,
        rating: 4.5, reviews: 98,
        image: 'images/products/kodak-pixpro-fz55-blue.png',
        gallery: ['images/products/kodak-pixpro-fz55-blue.png'],
        desc: 'The PIXPRO FZ55 in a cool blue finish.',
        specs: {
            'Sensor': '16MP CMOS',
            'Zoom': '5x Optical',
            'Color': 'Blue',
            'Weight': '117g'
        }
    },

    'kodak-pixpro-fz55-red': {
        brand: 'Kodak', category: 'Digicam', name: 'KODAK PIXPRO FZ55 — Red',
        price: 13499, oldPrice: null, discount: null,
        rating: 4.5, reviews: 87,
        image: 'images/products/kodak-pixpro-fz55-red.png',
        gallery: ['images/products/kodak-pixpro-fz55-red.png'],
        desc: 'The PIXPRO FZ55 in a vibrant red finish.',
        specs: {
            'Sensor': '16MP CMOS',
            'Zoom': '5x Optical',
            'Color': 'Red',
            'Weight': '117g'
        }
    },

    'kodak-pixpro-c1': {
        brand: 'Kodak', category: 'Compact', name: 'KODAK PIXPRO C1',
        price: 15999, oldPrice: 17999, discount: '-12%',
        rating: 4.4, reviews: 156,
        image: 'images/products/kodak-pixpro-c1.png',
        gallery: ['images/products/kodak-pixpro-c1.png'],
        desc: 'A compact camera with 13MP sensor and 4x optical zoom.',
        specs: {
            'Sensor': '13MP CMOS',
            'Zoom': '4x Optical',
            'Video': '1080p Full HD',
            'Weight': '117g'
        }
    },

    'kodak-ektar-h35': {
        brand: 'Kodak', category: 'Film', name: 'Kodak Ektar H35',
        price: 4999, oldPrice: null, discount: null,
        rating: 4.5, reviews: 234,
        image: 'images/products/kodak-ektar-h35.png',
        gallery: ['images/products/kodak-ektar-h35.png'],
        desc: 'A half-frame film camera that doubles the number of shots per roll.',
        specs: {
            'Film': '35mm',
            'Frame': 'Half-frame',
            'Lens': '22mm f/9.5',
            'Weight': '110g'
        }
    },

    'kodak-ektar-h35n': {
        brand: 'Kodak', category: 'Film', name: 'Kodak Ektar H35N',
        price: 6499, oldPrice: 6999, discount: '-5%',
        rating: 4.6, reviews: 167,
        image: 'images/products/kodak-ektar-h35n.png',
        gallery: ['images/products/kodak-ektar-h35n.png'],
        desc: 'An upgraded half-frame camera with glass lens and built-in flash.',
        specs: {
            'Film': '35mm',
            'Frame': 'Half-frame',
            'Lens': '22mm glass',
            'Weight': '110g'
        }
    },

    'kodak-m35': {
        brand: 'Kodak', category: 'Film', name: 'Kodak M35',
        price: 3499, oldPrice: null, discount: null,
        rating: 4.4, reviews: 289,
        image: 'images/products/kodak-m35.png',
        gallery: ['images/products/kodak-m35.png'],
        desc: 'A reusable 35mm film camera with simple point-and-shoot operation.',
        specs: {
            'Film': '35mm',
            'Lens': '31mm f/10',
            'Flash': 'Built-in',
            'Weight': '100g'
        }
    },

    'kodak-m38': {
        brand: 'Kodak', category: 'Film', name: 'Kodak M38',
        price: 3999, oldPrice: 4299, discount: '-8%',
        rating: 4.5, reviews: 203,
        image: 'images/products/kodak-m38.png',
        gallery: ['images/products/kodak-m38.png'],
        desc: 'A colorful 35mm film camera with built-in flash.',
        specs: {
            'Film': '35mm',
            'Lens': '31mm f/10',
            'Flash': 'Built-in',
            'Weight': '100g'
        }
    },

    'kodak-ultramax-400': {
        brand: 'Kodak', category: 'Accessories', name: 'Kodak UltraMax 400 Film',
        price: 1299, oldPrice: null, discount: null,
        rating: 4.8, reviews: 412,
        image: 'images/products/kodak-ultramax-400.png',
        gallery: ['images/products/kodak-ultramax-400.png'],
        desc: 'A versatile 35mm color negative film with 400 ISO.',
        specs: {
            'Film Type': '35mm Color Negative',
            'ISO': '400',
            'Exposures': '36',
            'Process': 'C-41'
        }
    },

    'kodak-gold-200': {
        brand: 'Kodak', category: 'Accessories', name: 'Kodak Gold 200 Film',
        price: 1199, oldPrice: 1299, discount: '-10%',
        rating: 4.9, reviews: 356,
        image: 'images/products/kodak-gold-200.png',
        gallery: ['images/products/kodak-gold-200.png'],
        desc: 'A classic 35mm film with warm, nostalgic color tones.',
        specs: {
            'Film Type': '35mm Color Negative',
            'ISO': '200',
            'Exposures': '36',
            'Process': 'C-41'
        }
    },

    'kodak-colorplus-200': {
        brand: 'Kodak', category: 'Accessories', name: 'Kodak ColorPlus 200 Film',
        price: 1099, oldPrice: null, discount: null,
        rating: 4.7, reviews: 278,
        image: 'images/products/kodak-colorplus-200.png',
        gallery: ['images/products/kodak-colorplus-200.png'],
        desc: 'An affordable 35mm film with natural color reproduction.',
        specs: {
            'Film Type': '35mm Color Negative',
            'ISO': '200',
            'Exposures': '36',
            'Process': 'C-41'
        }
    },

    /* ==================================================
       GOPRO (15)
    ================================================== */

    'gopro-hero13-black': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO13 Black',
        price: 22999, oldPrice: 25999, discount: '-10%',
        rating: 4.9, reviews: 145,
        image: 'images/products/gopro-hero13-black.png',
        gallery: ['images/products/gopro-hero13-black.png'],
        desc: 'The most powerful HERO yet — 5.3K video, HyperSmooth 6.0 stabilization, and interchangeable lens mods.',
        specs: {
            'Video': '5.3K 60p / 4K 120p',
            'Photo': '27MP',
            'Battery': 'Enduro 1900mAh',
            'Waterproof': '10m without housing',
            'Stabilization': 'HyperSmooth 6.0'
        }
    },

    'gopro-hero12-black': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO12 Black',
        price: 18999, oldPrice: 22999, discount: '-15%',
        rating: 4.8, reviews: 234,
        image: 'images/products/gopro-hero12-black.png',
        gallery: ['images/products/gopro-hero12-black.png'],
        desc: 'An action camera with 5.3K video, HyperSmooth 6.0, and HDR.',
        specs: {
            'Video': '5.3K 60p',
            'Photo': '27MP',
            'Waterproof': '10m',
            'Stabilization': 'HyperSmooth 6.0'
        }
    },

    'gopro-hero11-black': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO11 Black',
        price: 16999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 312,
        image: 'images/products/gopro-hero11-black.png',
        gallery: ['images/products/gopro-hero11-black.png'],
        desc: 'A powerful action camera with 5.3K video and 27MP photos.',
        specs: {
            'Video': '5.3K 60p',
            'Photo': '27MP',
            'Waterproof': '10m'
        }
    },

    'gopro-hero11-mini': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO11 Black Mini',
        price: 14999, oldPrice: 16999, discount: '-12%',
        rating: 4.6, reviews: 178,
        image: 'images/products/gopro-hero11-mini.png',
        gallery: ['images/products/gopro-hero11-mini.png'],
        desc: 'A smaller, lighter HERO11 without screens — pure performance.',
        specs: {
            'Video': '5.3K 60p',
            'Photo': '27MP',
            'Weight': '133g'
        }
    },

    'gopro-hero10-black': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO10 Black',
        price: 14999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 245,
        image: 'images/products/gopro-hero10-black.png',
        gallery: ['images/products/gopro-hero10-black.png'],
        desc: 'An action camera with GP2 processor and 5.3K video.',
        specs: {
            'Video': '5.3K 60p',
            'Photo': '23MP',
            'Waterproof': '10m'
        }
    },

    'gopro-hero9-black': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO9 Black',
        price: 11999, oldPrice: 14999, discount: '-20%',
        rating: 4.6, reviews: 389,
        image: 'images/products/gopro-hero9-black.png',
        gallery: ['images/products/gopro-hero9-black.png'],
        desc: 'The HERO9 introduced the front screen and 5K video.',
        specs: {
            'Video': '5K 30p',
            'Photo': '20MP',
            'Waterproof': '10m'
        }
    },

    'gopro-hero8-black': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO8 Black',
        price: 9999, oldPrice: null, discount: null,
        rating: 4.5, reviews: 267,
        image: 'images/products/gopro-hero8-black.png',
        gallery: ['images/products/gopro-hero8-black.png'],
        desc: 'A classic HERO action camera with HyperSmooth 2.0.',
        specs: {
            'Video': '4K 60p',
            'Photo': '12MP',
            'Waterproof': '10m'
        }
    },

    'gopro-hero13-creator': {
        brand: 'GoPro', category: 'Action', name: 'GoPro HERO13 Black Creator Edition',
        price: 32999, oldPrice: 35999, discount: '-8%',
        rating: 4.8, reviews: 76,
        image: 'images/products/gopro-hero13-creator.png',
        gallery: ['images/products/gopro-hero13-creator.png'],
        desc: 'HERO13 Black bundled with Volta grip, Media Mod, and Light Mod.',
        specs: {
            'Video': '5.3K 60p',
            'Bundle': 'Volta + Media Mod + Light Mod',
            'Waterproof': '10m'
        }
    },

    'gopro-max-2': {
        brand: 'GoPro', category: 'Action', name: 'GoPro MAX 2',
        price: 27999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 112,
        image: 'images/products/gopro-max-2.png',
        gallery: ['images/products/gopro-max-2.png'],
        desc: 'A 360 camera with dual lenses and 6K spherical video.',
        specs: {
            'Video': '6K 360',
            'Photo': '21MP',
            'Lenses': 'Dual (front + back)',
            'Waterproof': '5m'
        }
    },

    'gopro-max-2024': {
        brand: 'GoPro', category: 'Action', name: 'GoPro MAX (2024)',
        price: 17999, oldPrice: 19999, discount: '-10%',
        rating: 4.6, reviews: 189,
        image: 'images/products/gopro-max-2024.png',
        gallery: ['images/products/gopro-max-2024.png'],
        desc: 'The original MAX 360 camera, re-released in 2024.',
        specs: {
            'Video': '5.6K 360',
            'Photo': '16.6MP',
            'Waterproof': '5m'
        }
    },

    'gopro-volta': {
        brand: 'GoPro', category: 'Accessories', name: 'GoPro Volta',
        price: 7999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 234,
        image: 'images/products/gopro-volta.png',
        gallery: ['images/products/gopro-volta.png'],
        desc: 'A battery grip with tripod, remote, and extended battery life.',
        specs: {
            'Type': 'Battery Grip',
            'Battery': '4900mAh',
            'Extras': 'Tripod + Remote'
        }
    },

    'gopro-media-mod': {
        brand: 'GoPro', category: 'Accessories', name: 'GoPro Media Mod',
        price: 3999, oldPrice: 4499, discount: '-10%',
        rating: 4.6, reviews: 178,
        image: 'images/products/gopro-media-mod.png',
        gallery: ['images/products/gopro-media-mod.png'],
        desc: 'A media mod with built-in mic, HDMI, and USB-C ports.',
        specs: {
            'Type': 'Media Mod',
            'Ports': 'HDMI + USB-C + 3.5mm',
            'Built-in Mic': 'Yes'
        }
    },

    'gopro-enduro': {
        brand: 'GoPro', category: 'Accessories', name: 'GoPro Enduro Battery',
        price: 1499, oldPrice: null, discount: null,
        rating: 4.8, reviews: 412,
        image: 'images/products/gopro-enduro.png',
        gallery: ['images/products/gopro-enduro.png'],
        desc: 'An extended-life battery for HERO cameras.',
        specs: {
            'Type': 'Battery',
            'Capacity': '1720mAh',
            'Compatibility': 'HERO9–HERO13'
        }
    },

    'gopro-dual-charger': {
        brand: 'GoPro', category: 'Accessories', name: 'GoPro Dual Battery Charger',
        price: 2499, oldPrice: 2699, discount: '-5%',
        rating: 4.7, reviews: 289,
        image: 'images/products/gopro-dual-charger.png',
        gallery: ['images/products/gopro-dual-charger.png'],
        desc: 'A dual battery charger with USB-C input.',
        specs: {
            'Type': 'Dual Charger',
            'Bays': '2',
            'Input': 'USB-C'
        }
    },

    'gopro-adventure-kit': {
        brand: 'GoPro', category: 'Accessories', name: 'GoPro Adventure Kit',
        price: 5499, oldPrice: null, discount: null,
        rating: 4.6, reviews: 156,
        image: 'images/products/gopro-adventure-kit.png',
        gallery: ['images/products/gopro-adventure-kit.png'],
        desc: 'A kit with chest mount, head strap, and floating hand grip.',
        specs: {
            'Type': 'Accessory Kit',
            'Includes': 'Chest Mount + Head Strap + Grip'
        }
    },

    /* ==================================================
       DJI (15)
    ================================================== */

    'dji-osmo-action-5-pro': {
        brand: 'DJI', category: 'Action', name: 'DJI Osmo Action 5 Pro',
        price: 22999, oldPrice: 24999, discount: '-8%',
        rating: 4.9, reviews: 156,
        image: 'images/products/dji-osmo-action-5-pro.png',
        gallery: ['images/products/dji-osmo-action-5-pro.png'],
        desc: 'DJI\'s flagship action camera with 1/1.3" sensor and 4-hour battery.',
        specs: {
            'Sensor': '1/1.3" CMOS',
            'Video': '4K 120p',
            'Battery': '1950mAh (4hr)',
            'Waterproof': '20m'
        }
    },

    'dji-osmo-action-4': {
        brand: 'DJI', category: 'Action', name: 'DJI Osmo Action 4',
        price: 17999, oldPrice: 20499, discount: '-12%',
        rating: 4.8, reviews: 234,
        image: 'images/products/dji-osmo-action-4.png',
        gallery: ['images/products/dji-osmo-action-4.png'],
        desc: 'An action camera with 1/1.3" sensor and 4K 120p video.',
        specs: {
            'Sensor': '1/1.3" CMOS',
            'Video': '4K 120p',
            'Waterproof': '18m'
        }
    },

    'dji-osmo-action': {
        brand: 'DJI', category: 'Action', name: 'DJI Osmo Action',
        price: 19999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 84,
        image: 'images/products/dji-osmo-action.png',
        gallery: ['images/products/dji-osmo-action.png'],
        desc: 'A rugged action camera with dual screens, RockSteady stabilization, and 4K 60p recording.',
        specs: {
            'Video': '4K 60p',
            'Photo': '12MP',
            'Battery': '1300mAh',
            'Waterproof': '11m without housing'
        }
    },

    'dji-osmo-pocket-3': {
        brand: 'DJI', category: 'Vlog', name: 'DJI Osmo Pocket 3',
        price: 32999, oldPrice: 34999, discount: '-5%',
        rating: 4.9, reviews: 312,
        image: 'images/products/dji-osmo-pocket-3.png',
        gallery: ['images/products/dji-osmo-pocket-3.png'],
        desc: 'A pocket-sized gimbal camera with 1" sensor and rotating touchscreen.',
        specs: {
            'Sensor': '1" CMOS',
            'Video': '4K 120p',
            'Screen': '2" rotating touchscreen',
            'Weight': '179g'
        }
    },

    'dji-osmo-pocket-3-creator': {
        brand: 'DJI', category: 'Vlog', name: 'DJI Osmo Pocket 3 Creator Combo',
        price: 44999, oldPrice: 49999, discount: '-10%',
        rating: 4.9, reviews: 178,
        image: 'images/products/dji-osmo-pocket-3-creator.png',
        gallery: ['images/products/dji-osmo-pocket-3-creator.png'],
        desc: 'Osmo Pocket 3 bundled with DJI Mic 2, wide-angle lens, and case.',
        specs: {
            'Sensor': '1" CMOS',
            'Video': '4K 120p',
            'Bundle': 'Mic 2 + Wide Lens + Case'
        }
    },

    'dji-mini-4-pro': {
        brand: 'DJI', category: 'Drone', name: 'DJI Mini 4 Pro',
        price: 44999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 287,
        image: 'images/products/dji-mini-4-pro.png',
        gallery: ['images/products/dji-mini-4-pro.png'],
        desc: 'A sub-249g drone with 4K 100fps video and omnidirectional sensing.',
        specs: {
            'Weight': '249g',
            'Video': '4K 100fps',
            'Range': '20km',
            'Flight Time': '34 min'
        }
    },

    'dji-mini-4-pro-fly-more': {
        brand: 'DJI', category: 'Drone', name: 'DJI Mini 4 Pro Fly More Combo',
        price: 54999, oldPrice: 59999, discount: '-8%',
        rating: 4.9, reviews: 145,
        image: 'images/products/dji-mini-4-pro-fly-more.png',
        gallery: ['images/products/dji-mini-4-pro-fly-more.png'],
        desc: 'Mini 4 Pro bundled with extra batteries, bag, and ND filters.',
        specs: {
            'Weight': '249g',
            'Bundle': '3 Batteries + Bag + ND Filters',
            'Flight Time': '34 min (per battery)'
        }
    },

    'dji-air-3s': {
        brand: 'DJI', category: 'Drone', name: 'DJI Air 3S',
        price: 79999, oldPrice: null, discount: null,
        rating: 4.9, reviews: 98,
        image: 'images/products/dji-air-3s.png',
        gallery: ['images/products/dji-air-3s.png'],
        desc: 'A dual-camera drone with 1" sensor and 4K 100fps video.',
        specs: {
            'Cameras': 'Wide + Telephoto',
            'Video': '4K 100fps',
            'Flight Time': '45 min'
        }
    },

    'dji-mavic-3-pro': {
        brand: 'DJI', category: 'Drone', name: 'DJI Mavic 3 Pro',
        price: 142999, oldPrice: 149999, discount: '-5%',
        rating: 4.9, reviews: 167,
        image: 'images/products/dji-mavic-3-pro.png',
        gallery: ['images/products/dji-mavic-3-pro.png'],
        desc: 'A triple-camera drone with 4/3 CMOS Hasselblad sensor.',
        specs: {
            'Cameras': 'Triple (4/3 + 2x + 3x)',
            'Video': '5.1K 50fps',
            'Flight Time': '43 min'
        }
    },

    'dji-avata-2': {
        brand: 'DJI', category: 'Drone', name: 'DJI Avata 2',
        price: 49999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 134,
        image: 'images/products/dji-avata-2.png',
        gallery: ['images/products/dji-avata-2.png'],
        desc: 'An FPV drone with 4K 60p video and built-in propeller guards.',
        specs: {
            'Type': 'FPV Drone',
            'Video': '4K 60p',
            'Flight Time': '23 min'
        }
    },

    'dji-rs-4-pro': {
        brand: 'DJI', category: 'Gimbal', name: 'DJI RS 4 Pro',
        price: 49999, oldPrice: 54999, discount: '-8%',
        rating: 4.9, reviews: 89,
        image: 'images/products/dji-rs-4-pro.png',
        gallery: ['images/products/dji-rs-4-pro.png'],
        desc: 'A professional 3-axis gimbal with 4.5kg payload.',
        specs: {
            'Payload': '4.5kg',
            'Battery': '29 hours',
            'Type': 'Professional Gimbal'
        }
    },

    'dji-rs-4': {
        brand: 'DJI', category: 'Gimbal', name: 'DJI RS 4',
        price: 32999, oldPrice: null, discount: null,
        rating: 4.8, reviews: 112,
        image: 'images/products/dji-rs-4.png',
        gallery: ['images/products/dji-rs-4.png'],
        desc: 'A versatile 3-axis gimbal with 3kg payload.',
        specs: {
            'Payload': '3kg',
            'Battery': '12 hours',
            'Type': 'Gimbal'
        }
    },

    'dji-mic-2': {
        brand: 'DJI', category: 'Accessories', name: 'DJI Mic 2',
        price: 14999, oldPrice: 16999, discount: '-10%',
        rating: 4.8, reviews: 278,
        image: 'images/products/dji-mic-2.png',
        gallery: ['images/products/dji-mic-2.png'],
        desc: 'A wireless microphone system with 32-bit float recording.',
        specs: {
            'Type': 'Wireless Mic',
            'Range': '250m',
            'Battery': '18 hours'
        }
    },

    'dji-osmo-mobile-6': {
        brand: 'DJI', category: 'Gimbal', name: 'DJI Osmo Mobile 6',
        price: 7999, oldPrice: null, discount: null,
        rating: 4.7, reviews: 234,
        image: 'images/products/dji-osmo-mobile-6.png',
        gallery: ['images/products/dji-osmo-mobile-6.png'],
        desc: 'A smartphone gimbal with built-in extension rod and ActiveTrack.',
        specs: {
            'Type': 'Phone Gimbal',
            'Battery': '6.4 hours',
            'Features': 'Extension Rod + ActiveTrack 5.0'
        }
    },

    'dji-osmo-mobile-se': {
        brand: 'DJI', category: 'Gimbal', name: 'DJI Osmo Mobile SE',
        price: 3999, oldPrice: 4699, discount: '-15%',
        rating: 4.6, reviews: 156,
        image: 'images/products/dji-osmo-mobile-se.png',
        gallery: ['images/products/dji-osmo-mobile-se.png'],
        desc: 'An affordable smartphone gimbal with ActiveTrack 6.0.',
        specs: {
            'Type': 'Phone Gimbal',
            'Battery': '13 hours',
            'Features': 'ActiveTrack 6.0'
        }
    },

    /* ==================================================
       SAMSUNG (9)
    ================================================== */

    'samsung-nx30': {
        brand: 'Samsung', category: 'Mirrorless', name: 'Samsung NX30',
        price: 34999, oldPrice: null, discount: null,
        rating: 4.6, reviews: 178,
        image: 'images/products/samsung-nx30.png',
        gallery: ['images/products/samsung-nx30.png'],
        desc: 'A classic NX-series mirrorless camera with 20.3MP APS-C sensor and tilting EVF.',
        specs: {
            'Sensor': '20.3MP APS-C CMOS',
            'Video': '1080p Full HD',
            'EVF': 'Tilting',
            'Weight': '375g (body only)'
        }
    },

    'samsung-nx3000': {
        brand: 'Samsung', category: 'Mirrorless', name: 'Samsung NX3000',
        price: 19999, oldPrice: 21999, discount: '-8%',
        rating: 4.5, reviews: 156,
        image: 'images/products/samsung-nx3000.png',
        gallery: ['images/products/samsung-nx3000.png'],
        desc: 'A compact NX mirrorless with 20.3MP sensor and flip-up screen.',
        specs: {
            'Sensor': '20.3MP APS-C CMOS',
            'Video': '1080p Full HD',
            'Screen': 'Flip-up',
            'Weight': '230g (body only)'
        }
    },

    'samsung-nx2000': {
        brand: 'Samsung', category: 'Mirrorless', name: 'Samsung NX2000',
        price: 14999, oldPrice: null, discount: null,
        rating: 4.4, reviews: 134,
        image: 'images/products/samsung-nx2000.png',
        gallery: ['images/products/samsung-nx2000.png'],
        desc: 'An entry-level NX mirrorless with 20.3MP sensor and touchscreen.',
        specs: {
            'Sensor': '20.3MP APS-C CMOS',
            'Video': '1080p Full HD',
            'Screen': 'Touchscreen',
            'Weight': '228g (body only)'
        }
    },

    'samsung-nx1000': {
        brand: 'Samsung', category: 'Mirrorless', name: 'Samsung NX1000',
        price: 12999, oldPrice: 14499, discount: '-10%',
        rating: 4.3, reviews: 98,
        image: 'images/products/samsung-nx1000.png',
        gallery: ['images/products/samsung-nx1000.png'],
        desc: 'An early NX-series mirrorless with 20.3MP sensor and Wi-Fi.',
        specs: {
            'Sensor': '20.3MP APS-C CMOS',
            'Video': '1080p Full HD',
            'Wi-Fi': 'Yes',
            'Weight': '222g (body only)'
        }
    },

    'samsung-nx20': {
        brand: 'Samsung', category: 'Mirrorless', name: 'Samsung NX20',
        price: 22999, oldPrice: null, discount: null,
        rating: 4.5, reviews: 145,
        image: 'images/products/samsung-nx20.png',
        gallery: ['images/products/samsung-nx20.png'],
        desc: 'A DSLR-styled NX mirrorless with 20.3MP sensor and EVF.',
        specs: {
            'Sensor': '20.3MP APS-C CMOS',
            'Video': '1080p Full HD',
            'EVF': 'Yes',
            'Weight': '341g (body only)'
        }
    },

    'samsung-wb350f': {
        brand: 'Samsung', category: 'Compact', name: 'Samsung WB350F',
        price: 15999, oldPrice: null, discount: null,
        rating: 4.3, reviews: 167,
        image: 'images/products/samsung-wb350f.png',
        gallery: ['images/products/samsung-wb350f.png'],
        desc: 'A compact camera with 21x optical zoom and Wi-Fi.',
        specs: {
            'Sensor': '16.3MP CMOS',
            'Zoom': '21x Optical',
            'Wi-Fi': 'Yes',
            'Weight': '216g'
        }
    },

    'samsung-wb1100f': {
        brand: 'Samsung', category: 'Compact', name: 'Samsung WB1100F',
        price: 17999, oldPrice: 19999, discount: '-10%',
        rating: 4.4, reviews: 112,
        image: 'images/products/samsung-wb1100f.png',
        gallery: ['images/products/samsung-wb1100f.png'],
        desc: 'A bridge camera with 35x optical zoom and Wi-Fi.',
        specs: {
            'Sensor': '16.2MP CCD',
            'Zoom': '35x Optical',
            'Wi-Fi': 'Yes',
            'Weight': '436g'
        }
    },

    'samsung-dv150f': {
        brand: 'Samsung', category: 'Compact', name: 'Samsung DV150F',
        price: 8999, oldPrice: null, discount: null,
        rating: 4.2, reviews: 89,
        image: 'images/products/samsung-dv150f.png',
        gallery: ['images/products/samsung-dv150f.png'],
        desc: 'A dual-screen compact camera with 5x optical zoom.',
        specs: {
            'Sensor': '16.2MP CCD',
            'Zoom': '5x Optical',
            'Screen': 'Dual (front + rear)',
            'Weight': '115g'
        }
    },

    'samsung-st150f': {
        brand: 'Samsung', category: 'Compact', name: 'Samsung ST150F',
        price: 6999, oldPrice: 7999, discount: '-12%',
        rating: 4.1, reviews: 76,
        image: 'images/products/samsung-st150f.png',
        gallery: ['images/products/samsung-st150f.png'],
        desc: 'A slim point-and-shoot compact with 5x optical zoom.',
        specs: {
            'Sensor': '16.2MP CCD',
            'Zoom': '5x Optical',
            'Weight': '115g'
        }
    }

    /* 
    ⚠️ ADD PA MORE PRODUCTS DITO KUNG KAILANGAN
    Format: 'product-id': { ... }
    */
};