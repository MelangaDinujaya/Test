import sunglass01 from '../assets/duckworth_609-blonde_tortoise-front-opt_2.jpg'
import sunglass02 from '../assets/kato_081-rose-gold-45d-sunglasses.jpg'
import sunglass03 from '../assets/kato_081-rose-gold-back-sunglasses.jpg'
import sunglass04 from '../assets/kato_081-rose-gold-side-sunglasses.jpg'
export const NAV_LINKS = [
    {
        label: "Glasses",
        path: "/",
    },
    {
        label: "Sunglasses",
        path: "/sunglasses",
    },
    {
        label: "Location",
        path: "/location",
    },
    {
        label: "Eye Test Info",
        path: "/eye-test-info",
    },
    {
        label: "Others",
        path: "/others",
    },
];

export const DUMMY_PRODUCT = {
    title: "Duckworth 609 Blonde Tortoise",
    desc: "this is a description",
    images: [sunglass01, sunglass02, sunglass03, sunglass04],
    //black red green cyan magenta yellow
    colors: [
        {
            label: "black",
            color: "#000000"
        },
        {
            label: "red",
            color: "#FF0000"
        },
        {
            label: "green",
            color: "#00FF00"
        },
        {
            label: "cyan",
            color: "#00FFFF"
        },
        {
            label: "magenta",
            color: "#FF00FF"
        },
        {
            label: "yellow",
            color: "#FFFF00"
        },
        {
            label: "blue",
            color: "#0000FF"
        },
        {
            label: "white",
            color: "#FFFFFF"
        }
    ],
    price: 199,
    frameDetails: [{
        desc: "A calssic brow-line glass frame with a 3D frame shape. This frame is made of high quality, 100% UV protection, 100% UV protection, and 100% UV protection.",
        frameFit: 'wide',
        measurement: '20.5 x 14.5 x 3.5mm',
        causions: [
            'This frame comes with a 3D frame shape. This frame is made of high quality, 100% UV protection, 100% UV protection, and 100% UV protection.',
        ]
    }]

}