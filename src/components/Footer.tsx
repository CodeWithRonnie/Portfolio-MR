const Footer = () => {
  return (
    <footer className="bg-[#080812] py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="text-white text-2xl font-bold mb-2">Mamikie Maemu</div>
            <p className="text-white/50 text-sm mb-6">Designed and developed with passion.</p>
          </div>
          
          <div className="w-full pt-6 border-t border-white/10">
            <p className="text-white/50 text-sm text-center">© {new Date().getFullYear()} Mamikie Maemu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
