function Sidebar() {
  return (
    <aside style={{
      width: '200px',
      backgroundColor: '#181818',
      color: 'white',
      height: '100vh',
      padding: '10px'
    }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
