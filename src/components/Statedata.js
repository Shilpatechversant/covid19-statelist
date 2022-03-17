import React,{Component} from 'react';
import Axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import { OffcanvasBody } from 'react-bootstrap';

class Statedata extends Component{

    constructor()
    {
    super();
   this.state= {
       StateData:{},
       isLoading: true,

    }


    }

    componentDidMount()
    {
        Axios.get("https://data.covid19india.org/state_district_wise.json").then(response=>{
 
            this.setState({
                stateData:response.data,
                isLoading: false
            })


        }

        ) .catch((error) => console.log(error));
    }

    render()
    {

      if(this.state.isLoading) {
        return <div>Loading...</div>
      } 

      let keys=Object.keys(this.state.StateData);
      console.log(keys);
        return(
            <div className="row">
                <div className='col-md-12'>              
                <Accordion >
                  {
                    keys.map((itm,ky)=>{  

                      let districts=this.state.stateData[itm].districtData;
                      let district_keys=Object.keys(districts);
                      console.log("````````````");
                      console.log(districts);
                      
                      return(  
                      <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                      Here
                      </Accordion.Body>
                    </Accordion.Item>

                      )
                       
                    })

                  }


</Accordion>

                </div>
            </div>
        );
    }
}

export default Statedata;