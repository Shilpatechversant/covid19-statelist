import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import Statedata  from './Statedata';



class India extends Component{

   

    render()
    {

        return(
            <div className="row">
                <div className="col-md-12">

                    <img className="lindia" src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"></img>
                    <h3>India</h3>
                </div>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>

 <Card  style={{ width: '18rem',backgroundColor:'yellow' }}>

  <Card.Body>
    <Card.Title>Total Cases</Card.Title>
    <h3>12536</h3>
    <Card.Text>
  [Today 25]
    </Card.Text>
  </Card.Body>
</Card>

                        </div>
                        <div className='col-md-3'>
                        <Card  style={{ width: '18rem',backgroundColor:'orange' }}>

<Card.Body>
  <Card.Title>Active Cases</Card.Title>
  <h3>12536</h3>
  <Card.Text>
[Today 25]
  </Card.Text>
</Card.Body>
</Card>
                            
                            </div>

                            <div className='col-md-3'>

                            <Card  style={{ width: '18rem',backgroundColor:'green' }}>

<Card.Body>
  <Card.Title>Recovered Cases</Card.Title>
  <h3>12536</h3>
  <Card.Text>
[Today 25]
  </Card.Text>
</Card.Body>
</Card>
                            
                            </div>
                            <div className='col-md-3'>

                            <Card  style={{ width: '18rem',backgroundColor:'red' }}>

<Card.Body>
  <Card.Title>Death Cases</Card.Title>
  <h3>12536</h3>
  <Card.Text>
[Today 25]
  </Card.Text>
</Card.Body>
</Card>
                            
                            </div>
                            

                    </div>
                </div>

                <div className="col-md-12">
                    <Statedata></Statedata>
                </div>
            </div>
        );
    }
}

export default India;