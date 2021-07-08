import {Card, CardImg, CardText, CardBody,CardTitle, Button, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom'

const Charity = (props) => {
    if(props.charity.vid){
        return(
        <div className="charity-card-container" id={props.charity.key}>
            <Card className='card'>
                <CardImg className='card-img' src={props.charity.img} alt="ALS Association Logo" />
                <CardBody className="charity-card">
                    <CardTitle tag="h5">{props.charity.charityName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.charity.subtitle}</CardSubtitle>
                    <CardText>{props.charity.missionStatement}</CardText>
                    <iframe  width="75%" height="75%" src={props.charity.vid} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Link id='learn-more-link' rel={'external'} target="_blank" to={{pathname: props.charity.link}}>Learn More</Link>
                    <div className="charity-btn-container">
                        <Link  rel={'external'} target="_blank" to={{pathname: props.charity.goFundMe}} ><Button id="donate-btn" className="charity-btn">Donate Now!</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
        )
    }else{
        return(
        <div className="charity-card-container" id={props.charity.key}>
            <Card className='card'>
                <CardImg className='card-img' src={props.charity.img} alt="ALS Association Logo" />
                <CardBody className="charity-card">
                    <CardTitle tag="h5">{props.charity.charityName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.charity.subtitle}</CardSubtitle>
                    <CardText>{props.charity.missionStatement}</CardText>
                    <Link id='learn-more-link' rel={'external'} target="_blank" to={{pathname: props.charity.link}}>Learn More</Link>
                    <div className="charity-btn-container">
                        <Link  rel={'external'} target="_blank" to={{pathname: props.charity.goFundMe}} ><Button id="donate-btn" className="charity-btn">Donate Now!</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
        )
        
    }
    
}

export default Charity;