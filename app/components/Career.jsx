import React from "react";
import { motion } from "framer-motion";

// Core MUI icons
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

// Industry Icons
import ComputerIcon from '@mui/icons-material/Computer';
import CampaignIcon from '@mui/icons-material/Campaign';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

// Role Icons
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ScienceIcon from '@mui/icons-material/Science';
import SecurityIcon from '@mui/icons-material/Security';
import CalculateIcon from '@mui/icons-material/Calculate';
import BugReportIcon from '@mui/icons-material/BugReport';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';


// Industries Data with roles + icons
const industries = [
  {
    title: "Information Technology (IT & Tech)",
    icon: ComputerIcon,
    roles: [
      { name: "Software Engineers & Developers", icon: CodeIcon },
      { name: "Quality Assurance (QA) Specialists", icon: BugReportIcon },
      { name: "Cloud & DevOps Professionals", icon: CloudQueueIcon },
      { name: "Cybersecurity Experts", icon: SecurityIcon },
      { name: "Data Engineers", icon: StorageIcon },
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    icon: LocalHospitalIcon,
    roles: [
      { name: "Nurses & Physicians", icon: LocalHospitalIcon },
      { name: "Therapists", icon: PeopleAltIcon },
      { name: "Laboratory Technicians", icon: ScienceIcon },
      { name: "Healthcare IT Specialists", icon: ComputerIcon },
      { name: "Pharmaceutical R&D Professionals", icon: ScienceIcon },
    ],
  },
  {
    title: "Finance & Accounting",
    icon: AccountBalanceIcon,
    roles: [
      { name: "Accountants", icon: CalculateIcon },
      { name: "Auditors", icon: AssessmentIcon },
      { name: "Financial Analysts", icon: AssessmentIcon },
      { name: "Tax Specialists", icon: CalculateIcon },
      { name: "Controllers", icon: AccountBalanceIcon },
    ],
  },
  {
    title: "Engineering",
    icon: EngineeringIcon,
    roles: [
      { name: "Civil Engineers", icon: EngineeringIcon },
      { name: "Mechanical Engineers", icon: PrecisionManufacturingIcon },
      { name: "Electrical Engineers", icon: EngineeringIcon },
      { name: "Manufacturing Engineers", icon: PrecisionManufacturingIcon },
      { name: "Industrial Engineers", icon: EngineeringIcon },
    ],
  },
  {
    title: "Administrative & Office Support",
    icon: AdminPanelSettingsIcon,
    roles: [
      { name: "Executive Assistants", icon: PeopleAltIcon },
      { name: "Data Entry Specialists", icon: StorageIcon },
      { name: "Clerks", icon: AdminPanelSettingsIcon },
      { name: "Receptionists", icon: PhoneInTalkIcon },
      { name: "Office Managers", icon: GroupIcon },
    ],
  },
  {
    title: "Sales & Marketing",
    icon: CampaignIcon,
    roles: [
      { name: "Sales Representatives", icon: PhoneInTalkIcon },
      { name: "Marketing Specialists", icon: CampaignIcon },
    ],
  },
];

export default function Career() {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div id="career">
      {/* Hero Section */}
      <section className="text-center py-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Build Your Future with us 🚀
        </motion.h1>
        <p className="text-l max-w-2xl mx-auto">
          At <span className="font-semibold">Omnireach Technology</span>, we connect talented professionals with leading organizations across industries. Whether you’re looking for your first job or your next big move, we’re here to help you succeed.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#F7931E" }}>Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Access to exclusive job opportunities",
            "Personalized career guidance & resume support",
            "Opportunities across multiple industries & skill sets",
            "A dedicated team that supports you every step of the way",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow p-6 text-center"
            >
              <p className="font-medium" style={{ color: "#1D2452" }}>✅ {point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="py-8 mt-5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#F7931E" }} >Our Hiring Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: SearchIcon, text: "We Understand Your Skills & Goals" },
              { icon: BusinessCenterIcon, text: "Match You With Client Needs" },
              { icon: AssignmentTurnedInIcon, text: "Guide You Through Interviews" },
              { icon: VerifiedUserIcon, text: "Ensure The Right Fit For Success" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow p-6 flex flex-col items-center"
              >
                <step.icon className="mb-4" style={{ fontSize: 32 }} />
                <p className="text-center font-medium" style={{ color: "#1D2452" }}>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Domains */}
      <section className="py-5" id="industries">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#F7931E" }}>
            Industries & Domains We Cover
          </h2>
          <div className="space-y-4">
            {industries.map((industry, idx) => {
              const isOpen = openIndex === idx;
              const IndustryIcon = industry.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex cursor-pointer justify-between items-center p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <IndustryIcon className="text-[#1D2452]" style={{ fontSize: 28 }} />
                      <h3 className="text-l font-semibold text-[#1D2452]" style={{ color: "#1D2452" }}>
                        {industry.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExpandMoreIcon className="text-gray-600" />
                    </motion.div>
                  </button>

                  {/* Expandable Content */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6"
                    >
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {industry.roles.map((role, i) => {
                          const RoleIcon = role.icon;
                          return (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm"
                            >
                              <RoleIcon className="text-[#1D2452]" style={{ fontSize: 22 }} />
                              <p className="text-m" style={{ color: "#1D2452" }}>{role.name}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Talent Network */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-6">Join Our Talent Network</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Not seeing the right opportunity right now? Send us your resume anyway at <span className="font-semibold text-[#F7931E]">{process.env.NEXT_PUBLIC_EMAIL}</span>, We’ll keep you in mind for future roles that match your skills.
        </p>
      </section>
    </div>
  );
}
