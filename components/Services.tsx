
const services = [
    {id:'01', title:'Online Movie Shop', description:' Deploy a reliable and secure user authentication system that allows users to log in via Google or GitHub accounts while integrating payment mechanisms like MoMo, Visa, MasterCard, or JCB to ensure privacy and secure transactions.'},
    {id:'02', title:'Online Movie Application', description: 'Create an engaging and interactive movie website with seamless functionality and an attractive design.' },
    {id:'03', title:'Campus Security Staff Management System', description: 'This system aims to simplify duty scheduling, leave requests, and monthly salary calculation.' },
]

export const Services = () => {
return(
    <section className="text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
            <h2 className="text-6x1 text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
            </div>
            <div className="md-w-3/4">
            {services.map(service =>(
                <div key={service.id} className="mb-16 flex items-start">
                    <div className="text-gray-300 font-bold text-5xl mr-6">
                        {service.id}
                    </div>
                   <div>
                   <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p> {service.description}</p>
                   </div>
                </div>
            ))}
           
            </div>
        </div>
    </section>
)
}