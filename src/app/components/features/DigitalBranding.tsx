import { Palette, Download, Eye, Image, Video, FileText } from "lucide-react";

export default function DigitalBranding() {
  const assets = [
    {
      category: "Social Media Posts",
      items: [
        { name: "Study in Canada - Instagram Post", type: "Image", format: "1080x1080", downloads: 45 },
        { name: "UK University Admission - Facebook Post", type: "Image", format: "1200x630", downloads: 38 },
        { name: "IELTS Preparation Tips", type: "Image", format: "1080x1080", downloads: 52 },
      ],
    },
    {
      category: "Banners",
      items: [
        { name: "Study Abroad Fair Banner", type: "Banner", format: "3x6 ft", downloads: 23 },
        { name: "Agency Website Header", type: "Banner", format: "1920x400", downloads: 31 },
      ],
    },
    {
      category: "Info Videos",
      items: [
        { name: "How to Apply for Canada Student Visa", type: "Video", format: "1080p", downloads: 67 },
        { name: "Top 10 Universities in Australia", type: "Video", format: "1080p", downloads: 54 },
      ],
    },
  ];

  const templates = [
    {
      name: "Instagram Story Template",
      description: "Customizable story template for daily updates",
      preview: "blue",
    },
    {
      name: "Facebook Cover Photo",
      description: "Professional cover design for your agency page",
      preview: "green",
    },
    {
      name: "YouTube Thumbnail",
      description: "Eye-catching thumbnail for info videos",
      preview: "orange",
    },
    {
      name: "Email Newsletter",
      description: "Ready-to-send newsletter template",
      preview: "purple",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Digital Branding Support</h1>
        <p className="text-gray-500 mt-2">Ready-made posters, banners, and info-videos for social media</p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Palette size={40} />
              <h2 className="text-3xl font-bold">Professional Marketing Assets</h2>
            </div>
            <p className="text-purple-100 text-lg mb-4">
              Elevate your agency's brand with ready-to-use content
            </p>
            <div className="flex gap-4">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-purple-100">Assets Available</p>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <p className="text-2xl font-bold">Weekly</p>
                <p className="text-xs text-purple-100">New Content</p>
              </div>
            </div>
          </div>
          <Palette size={80} className="opacity-30" />
        </div>
      </div>

      {/* Quick Templates */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Popular Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((template, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-br ${
                template.preview === "blue" ? "from-blue-400 to-blue-600" :
                template.preview === "green" ? "from-green-400 to-green-600" :
                template.preview === "orange" ? "from-orange-400 to-orange-600" :
                "from-purple-400 to-purple-600"
              } flex items-center justify-center`}>
                <Image size={48} className="text-white opacity-50" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{template.description}</p>
                <button className="w-full px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assets Library */}
      <div className="space-y-6">
        {assets.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">{section.category}</h2>
              <span className="text-sm text-gray-500">{section.items.length} items</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {item.type === "Image" && <Image size={48} className="text-gray-400" />}
                    {item.type === "Banner" && <FileText size={48} className="text-gray-400" />}
                    {item.type === "Video" && <Video size={48} className="text-gray-400" />}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-gray-100 rounded">{item.type}</span>
                      <span>{item.format}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{item.downloads} downloads this month</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1">
                        <Download size={14} />
                        Download
                      </button>
                      <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Eye size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Request */}
      <div className="bg-white p-8 rounded-xl border-2 border-dashed border-gray-300 text-center">
        <Palette size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Custom Design?</h3>
        <p className="text-gray-500 mb-6">
          Request custom branding materials tailored to your agency
        </p>
        <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
          Request Custom Design
        </button>
      </div>
    </div>
  );
}
