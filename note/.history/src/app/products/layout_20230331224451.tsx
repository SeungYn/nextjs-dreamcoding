type props = {
  children: React.ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <div>
      <nav>
        <a href=''>여성옷</a>
        <a href=''>남성옷</a>
      </nav>
      {children}
    </div>
  );
}
