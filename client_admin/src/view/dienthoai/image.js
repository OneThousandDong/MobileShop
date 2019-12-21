import React from 'react'
import {Progress} from 'reactstrap';
import axios from 'axios';


class ReactUploadImage extends React.Component {

    constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        loaded:0,
      }
   
  }

   onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files
        })
      }

     onClickHandler = () =>{
        const data = new FormData()
        for(var x = 0; x<this.state.selectedFile.length; x++) {
             data.append('file', this.state.selectedFile[x])
             console.log(this.state.selectedFile[x].name)

        }
        axios.post("http://localhost:5000/uploadimage", data, { 
          onUploadProgress: ProgressEvent => {
         this.setState({
           loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
               })
           },
          })
          .then(res => { // then print response status
          })


 
    }

    render() {
        return (

            <form>
                <h2>Image Upload</h2>
                <input type="file" name="file" multiple onChange={this.onChangeHandler}/>
                <button type="button" onClick={this.onClickHandler}>Upload</button>
                <div class="form-group">
                  <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
                </div>
            </form>
        )
    }
}

export default ReactUploadImage