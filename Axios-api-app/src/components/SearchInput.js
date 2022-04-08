import React from "react"

class SearchInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = { entry: '' };
    }
    // Uygulamanın sürümünden kaynaklı bir hata alıyorum. 
    // Bu yüzden arrow function ile birlikte tanımlama yapıyorum 

    render() {
        //uncontrolled form element and controlled form element 
        //controllü form elementinde value değerini componentin içerisindeki state yapısında tutulur 
        //ve sürekli dom ile işleme geçmez bu yüzden uygulamaya zaman kazandır.

        return (
            <div>
                <div className="input-group mb-3">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        console.clear();
                        //Parent componente child component den veri iletimi yapıldı.
                        this.props.onSubmitInput(this.state.entry);
                    }}>
                        <label className="mr-2"> Find Pictures : </label>
                        <input
                            type="text"
                            onChange={(event) => { this.setState({ entry: event.target.value.toUpperCase() }) }}
                            value={this.state.entry}
                        >{/*Parantez Belirtilmez.*/}
                        </input>
                        <button className="btn btn-primary btn-sm ml-1">Find</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default SearchInput;