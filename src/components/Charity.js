import {Card, CardImg, CardText, CardBody,CardTitle, Button, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom'

const Charity = (props) => {
    if(props.charity.vid){
        return(
            <div className="charity-card-container" id={props.charity.key}>
                <Card className="card">
                    <CardBody className="charity-card">
                        <div className="card-text">
                            <CardImg id={props.charity.imgKey} className='card-img' src={props.charity.img} alt="Association Logo" />
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.charity.subtitle}</CardSubtitle>
                            <iframe id="als-vid" src="https://www.youtube.com/embed/mVG9Nk6voM8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                            <CardText>{props.charity.missionStatement}<Link className="learn-more-link" rel={'external'} target="_blank" to={{pathname: props.charity.link}}>Learn More</Link></CardText>
                            <div className="charity-btn-container">
                            <Link  rel={'external'} target="_blank" to={{pathname: props.charity.goFundMe}} ><Button className="charity-btn">Donate Now!</Button></Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }else{
        return(
            <div className="charity-card-container" id={props.charity.key}>
                <Card className="card">
                    <CardBody className="charity-card">
                        <div className="card-text">
                            <CardImg id={props.charity.imgKey} className='card-img' src={props.charity.img} alt="Association Logo" />
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.charity.subtitle}</CardSubtitle>
                            <CardText>{props.charity.missionStatement}<Link className="learn-more-link" rel={'external'} target="_blank" to={{pathname: props.charity.link}}>Learn More</Link></CardText>
                            <div className="charity-btn-container">
                            <Link  rel={'external'} target="_blank" to={{pathname: props.charity.goFundMe}} ><Button className="charity-btn">Donate Now!</Button></Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
}

export default Charity;