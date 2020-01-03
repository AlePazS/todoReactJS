import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        };

        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInput(e){
//    console.log(e.target.value,e.target.name)
         const {value,name}= e.target;
        this.setState({
            [name]:value
            
        })
        console.log(this.state)
    }

handleSubmit(e){
    e.preventDefault();
    // alert('Enviando...');
    // console.log('Enviando los datos...');
    this.props.onAddTodo(this.state);

}
    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="title"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Titulo"
                       
                        />

                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="responsible"
                        className="form-control"
                        placeholder="Responsable" 
                        onChange={this.handleInput}       
                        />

                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Descripcion"  
                        onChange={this.handleInput}      
                        />

                    </div>
                    <div className="form-group">
                       <select name="priority"
                              className="form-control" 
                              onChange={this.handleInput}  >
                           <option>low</option>
                           <option>medium</option>
                           <option>high</option>
                       </select>

                    </div>
                    <div className="form-group">
                        <input 
                        type="submit"        
                        />

                    </div>


                </form>
                
            </div>
        )
    }
}
