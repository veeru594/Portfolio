import { motion } from 'framer-motion';
import { Zap, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';

const ROICalculator = () => {
  const [hoursPerDay, setHoursPerDay] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(500);
  const [costPerError, setCostPerError] = useState(1000);
  const [errorFrequency, setErrorFrequency] = useState(3);

  // Calculations
  const dailySavings = hoursPerDay * hourlyRate;
  const monthlySavings = dailySavings * 22; // Working days
  const yearlySavings = monthlySavings * 12;

  const errorSavingsPerMonth = costPerError * errorFrequency * 2; // Assuming 50% error reduction
  const yearlyErrorSavings = errorSavingsPerMonth * 12;

  const totalYearlySavings = yearlySavings + yearlyErrorSavings;
  const investmentAmount = 35000; // Professional plan
  const roi = ((totalYearlySavings - investmentAmount) / investmentAmount) * 100;
  const paybackMonths = investmentAmount / (monthlySavings + errorSavingsPerMonth);

  return (
    <div className="min-h-screen bg-slate-900">
      <BackToTop />
      <ScrollProgress />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              Calculate Your Automation ROI
            </h1>
            <p className="text-2xl text-gray-300">
              See exactly how much time and money you'll save with automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Time Input */}
            <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-cyan-400" />
                Hours Lost Daily
              </h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">How many hours per day are spent on manual work?</span>
                  <span className="text-4xl font-black text-cyan-400">{hoursPerDay}h</span>
                </div>
                <p className="text-sm text-gray-400">
                  {hoursPerDay * 22 * 12} hours per year = {((hoursPerDay * 22 * 12) / 8).toFixed(0)} full working days wasted
                </p>
              </div>
            </div>

            {/* Cost Input */}
            <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-400" />
                Hourly Cost
              </h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">What's your hourly cost (loaded)?</span>
                  <span className="text-4xl font-black text-green-400">₹{hourlyRate}</span>
                </div>
                <p className="text-sm text-gray-400">
                  {hoursPerDay * hourlyRate} per day being wasted
                </p>
              </div>
            </div>
          </motion.div>

          {/* Error Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Error Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-gray-300 block">
                  Cost per error (rework, customer churn, etc.):
                </label>
                <input
                  type="number"
                  value={costPerError}
                  onChange={(e) => setCostPerError(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-cyan-400 outline-none"
                />
              </div>
              <div className="space-y-4">
                <label className="text-gray-300 block">
                  How often do errors occur per month?
                </label>
                <input
                  type="number"
                  value={errorFrequency}
                  onChange={(e) => setErrorFrequency(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-cyan-400 outline-none"
                />
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              ~₹{(costPerError * errorFrequency * 2 * 12).toLocaleString()} in annual error costs
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                label: 'Monthly Savings',
                value: `₹${(monthlySavings + errorSavingsPerMonth).toLocaleString()}`,
                icon: '💰',
                color: 'from-green-500 to-emerald-500'
              },
              {
                label: 'Annual Savings',
                value: `₹${totalYearlySavings.toLocaleString()}`,
                icon: '📈',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                label: 'Payback Period',
                value: `${paybackMonths.toFixed(1)} months`,
                icon: '⏰',
                color: 'from-purple-500 to-pink-500'
              },
              {
                label: 'First Year ROI',
                value: `${roi.toFixed(0)}%`,
                icon: '🎯',
                color: 'from-orange-500 to-red-500'
              }
            ].map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -10 }}
                className={`p-6 bg-gradient-to-br ${metric.color} rounded-2xl border border-slate-700`}
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <p className="text-gray-300 text-sm mb-2">{metric.label}</p>
                <p className="text-3xl font-black text-white">{metric.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">💡 Key Insights</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300">
                <span className="text-cyan-400 font-bold">✓</span>
                You're losing <span className="text-cyan-400 font-semibold">₹{dailySavings.toLocaleString()}</span> per day to manual work
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-cyan-400 font-bold">✓</span>
                Automation pays for itself in <span className="text-cyan-400 font-semibold">{paybackMonths.toFixed(1)} months</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-cyan-400 font-bold">✓</span>
                First year net savings: <span className="text-cyan-400 font-semibold">₹{(totalYearlySavings - investmentAmount).toLocaleString()}</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-cyan-400 font-bold">✓</span>
                You'll reclaim <span className="text-cyan-400 font-semibold">{hoursPerDay * 22 * 12} hours/year</span> for strategic work
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Realize These Savings?</h3>
            <p className="text-gray-300 text-lg mb-8">
              Let's schedule a discovery call to discuss your specific automation opportunity.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;
