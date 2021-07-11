import React from 'react'
import Charity from './Charity'
import alsLogo from '../images/alsLogo.png'
import worldVetsLogo from '../images/worldVetsLogo.jpg'
import nomvLogo from '../images/nomvLogo.png'
import vFoundationLogo from '../images/vFoundationLogo.jpg'
import ocraLogo from '../images/ocraLogo.png'

class CharitiesList extends React.Component{
    state = { 
        charities: [
            {
                img: nomvLogo,
                charityName: 'NOMV',
                missionStatement:"NOMV addresses wellbeing in veterinary medicine through multiple innovative pathways including: the world’s largest veterinary peer-to-peer support group, an educational program providing leadership focused on wellness; a support grant program providing immediate financial support; an online crisis support system specifically designed for veterinary professionals; and research to further the advancement of wellness, mental health, and the reduction of suicide in veterinary professionals.",
                link: 'https://nomv.org/',
                goFundMe: 'http://www.gofundme.com',
                imgKey: 'nomv-img',
                key: 'nomv-card',
                vid: ''
            },
            {
                img: worldVetsLogo,
                charityName: 'World Vets',
                missionStatement:"World Vets Mission is to improve the quality of life of animals, people and the environments in which they live by providing veterinary services, education, training and emergency response worldwide including work on companion animals, equids, livestock, wildlife and marine animals.",
                link: 'https://worldvets.org/',
                goFundMe: 'http://www.gofundme.com',
                key:'world-vets-card',
                imgKey:'world-vets-img',
                vid: ''
            },
            {
                img: alsLogo,
                charityName: 'ALS Association',
                missionStatement:"Help to discover treatments and a cure for ALS, and to serve, advocate for, and empower people affected by ALS to live their lives to the fullest.",
                link: 'https://www.alsa-midamerica.org/',
                goFundMe: 'http://www.gofundme.com',
                key: 'als-card',
                imgKey: 'als-img',
                vid: "https://www.youtube.com/embed/mVG9Nk6voM8"
            },
            {
                img: ocraLogo,
                charityName: 'OCRA',
                missionStatement:"Ovarian Cancer Research Alliance (OCRA) is the oldest and largest ovarian cancer charity in the world. Incorporated in 1994, OCRA has raised over $100 million in our quest to end ovarian cancer. As the largest private funder of ovarian cancer research, OCRA is also the only ovarian cancer-dedicated voice on Capitol Hill continuously advocating for hundreds of millions of dollars in federal research funding provided by the National Cancer Institute and Department of Defense, as well as for related health policies that will benefit patients and survivors.",
                link: 'https://ocrahope.org/',
                goFundMe: 'https://give.ocrahope.org/fundraiser/3330286',
                imgKey: 'ocra-img',
                key: 'ocra-card',
                vid: ''
            },
            {
                img: vFoundationLogo,
                charityName: 'The V Foundation',
                missionStatement:"The drive to save lives and find cures for cancer is at the heart of the V Foundation’s mission. It’s why every penny donated by people like you goes directly to cancer research and programs — not administrative or operational costs. Our funding model is made possible through an endowment. The endowment enables us to give 100% of direct donations to cancer researchers, working to find a cure. As a result, the V Foundation has funded more than $260 million in research grants since 1994.",
                link: 'https://www.v.org/',
                goFundMe: 'https://thevictoryride.donordrive.com/index.cfm?fuseaction=donorDrive.participant&participantID=1927',
                key: 'vfoundation-card',
                imgKey: 'vfoundation-img',
                vid: ''
            },
        ]
    }
    

    render(){
        const charityCards = this.state.charities.map((charity) => {
        return <Charity charity={charity} key={charity.key}/>
        }) 

        return(charityCards)
    } 
    
}

export default CharitiesList;