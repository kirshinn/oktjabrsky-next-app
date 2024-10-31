
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        next: { revalidate: 10 },
        cache: 'no-store'
    });
    return response.json();
}


const Me = async () => {
    
    const data = await getData();
    
    return (
        <div className="flex items-center justify-center h-screen">
            <h1>Профиль</h1> <br />
            <ul className="space-y-4">
                <li>{ data.userId }</li>
                <li>{ data.title }</li>
                <li>{ data.body }</li>
            </ul>
        </div>
    );

};

export default Me;
