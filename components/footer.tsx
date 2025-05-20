export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Abhinay Sambherao. All rights reserved.
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-muted-foreground text-sm flex items-center">
              Full-Stack Developer | Data Scientist | Data Analyst | Cloud Engineer
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
