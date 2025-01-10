import { Link } from 'react-router-dom';

const stayOptions = [
  { id: 1, name: 'Luxury Villa', type: 'Villa', price: '$200/night' },
  { id: 2, name: 'Beachside Resort', type: 'Resort', price: '$150/night' },
  { id: 3, name: 'Budget Hostel', type: 'Hostel', price: '$30/night' },
  { id: 4, name: '5-Star Hotel', type: 'Hotel', price: '$180/night' },
]

function StayOptions() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Stay Options in Goa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stayOptions.map((stay) => (
          <div key={stay.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{stay.name}</h3>
            <p className="mb-2">Type: {stay.type}</p>
            <p className="mb-4">Price: {stay.price}</p>
            <Link href={`/stay/${stay.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StayOptions;

