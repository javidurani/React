function MediaCard({ title, body, imageURL}){
    <div>
        <h2>{title}
            <p>{body}</p>
                <img src = {imageURL}/>
        </h2>
    </div>
    }

export function MediaCard();

//these have to be wrapped in a parent div otherwise they cant be returned!