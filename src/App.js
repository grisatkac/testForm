import React, {Component, Fragment} from 'react';
import FormArea from './components/FormArea/FormArea';
import Loading from './components/Loading/Loading';

class App extends Component {
  state = {
    result: {},
    loading: true,
  }

  async componentDidMount() {
    try {
        const response = await fetch('http://localhost:7000/test', {
          method: 'GET',
        });
        
        const result = await response.json();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
          this.setFormData(result);
        }, 500);

    } catch(error) {
        console.log(error);
    }
  }

  setFormData = (result) => {
    this.setState({
        result: result,
    });
  }

  render() {
    const { result, loading } = this.state;
    const { fields = false } = result;
    return(
        <Fragment>
          <div className="container"></div>
          
          { loading && <Loading /> }
          
          { fields && <FormArea formData={result} /> }
          
        </Fragment>
    )
  }
}

export default App;
