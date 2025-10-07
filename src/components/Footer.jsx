import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="p-2 md:p-8 text-center">
        <div className="flex justify-center space-x-6 mb-2 md:mb-4">
          <SocialLinks />
        </div>
    </footer>
  )
}

export default Footer