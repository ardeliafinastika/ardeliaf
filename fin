const classes = [
  { name: "SI", friends: ["Alice", "Bob", "Charlie", "David", "Eve"] },
  { name: "KA", friends: ["Fiona", "George", "Hannah", "Ian", "Jack"] },
  { name: "BD", friends: ["Karen", "Leo", "Mona", "Nathan", "Olivia"] },
];

function ProfileCard({ name }) {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
      <img
        src={`https://i.pravatar.cc/150?u=${name}`}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ClassCard({ className, friends }) {
  return (
    <div className="bg-white text-pink-700 rounded-lg shadow-lg p-6 w-full max-w-sm">
      <h2 className="text-xl font-bold text-center mb-4">Kelas {className}</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {friends.map((friend) => (
          <ProfileCard key={friend} name={friend} />
        ))}
      </div>
    </div>
  );
}

export default function ProfilePicture() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-500 to-pink-700 text-white text-center p-6">
      <h1 className="text-3xl font-extrabold tracking-wide mb-6">Adel's Portfolio</h1>
      <p className="text-lg font-light mb-6">Web Developer | UI/UX Designer | Tech Enthusiast</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classes.map((classData) => (
          <ClassCard key={classData.name} className={classData.name} friends={classData.friends} />
        ))}
      </div>
    </div>
  );
}
