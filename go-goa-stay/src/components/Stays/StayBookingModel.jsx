// "use client"

// import React, { useState } from "react"
// import { X, Loader2 } from "lucide-react"

// interface BookingModalProps {
//   isOpen: boolean
//   onClose: () => void
//   stay: any
//   selectedRoom?: string
//   selectedDates?: {
//     checkIn: string
//     checkOut: string
//   }
//   guestCount?: number
//   onSubmit: (bookingData: any) => Promise<void>
// }

// export default function BookingModal({
//   isOpen,
//   onClose,
//   stay,
//   selectedRoom,
//   selectedDates,
//   guestCount,
//   onSubmit,
// }: BookingModalProps) {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     roomType: selectedRoom || "",
//     checkIn: selectedDates?.checkIn || "",
//     checkOut: selectedDates?.checkOut || "",
//     guests: guestCount || 1,
//     specialRequests: "",
//   })
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   if (!isOpen) return null

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First name is required"
//     }
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last name is required"
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email address"
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required"
//     }
//     if (!formData.checkIn) {
//       newErrors.checkIn = "Check-in date is required"
//     }
//     if (!formData.checkOut) {
//       newErrors.checkOut = "Check-out date is required"
//     }
//     if (!formData.roomType) {
//       newErrors.roomType = "Room type is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setIsSubmitting(true)
//     try {
//       await onSubmit(formData)
//       onClose()
//     } catch (error) {
//       console.error("Booking failed:", error)
//       setErrors({
//         submit: "Failed to process booking. Please try again.",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="StayBookingModal-overlay">
//       <div className="StayBookingModal-container">
//         <div className="StayBookingModal-header">
//           <h2 className="StayBookingModal-title">Complete Your Booking</h2>
//           <button onClick={onClose} className="StayBookingModal-closeButton">
//             <X className="StayBookingModal-icon" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="StayBookingModal-form">
//           <div className="StayBookingModal-formGrid">
//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">First Name</label>
//               <input
//                 type="text"
//                 value={formData.firstName}
//                 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                 className={`StayBookingModal-input ${errors.firstName ? "StayBookingModal-error" : ""}`}
//               />
//               {errors.firstName && <p className="StayBookingModal-errorMessage">{errors.firstName}</p>}
//             </div>

//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">Last Name</label>
//               <input
//                 type="text"
//                 value={formData.lastName}
//                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                 className={`StayBookingModal-input ${errors.lastName ? "StayBookingModal-error" : ""}`}
//               />
//               {errors.lastName && <p className="StayBookingModal-errorMessage">{errors.lastName}</p>}
//             </div>

//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">Email</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className={`StayBookingModal-input ${errors.email ? "StayBookingModal-error" : ""}`}
//               />
//               {errors.email && <p className="StayBookingModal-errorMessage">{errors.email}</p>}
//             </div>

//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">Phone</label>
//               <input
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 className={`StayBookingModal-input ${errors.phone ? "StayBookingModal-error" : ""}`}
//               />
//               {errors.phone && <p className="StayBookingModal-errorMessage">{errors.phone}</p>}
//             </div>

//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">Room Type</label>
//               <select
//                 value={formData.roomType}
//                 onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
//                 className={`StayBookingModal-input ${errors.roomType ? "StayBookingModal-error" : ""}`}
//               >
//                 <option value="">Select a room type</option>
//                 {stay.rooms.map((room: any) => (
//                   <option key={room.type} value={room.type}>
//                     {room.type} - ₹{room.price}/night
//                   </option>
//                 ))}
//               </select>
//               {errors.roomType && <p className="StayBookingModal-errorMessage">{errors.roomType}</p>}
//             </div>

//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">Number of Guests</label>
//               <select
//                 value={formData.guests}
//                 onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
//                 className="StayBookingModal-input"
//               >
//                 {[1, 2, 3, 4].map((num) => (
//                   <option key={num} value={num}>
//                     {num} {num === 1 ? "Guest" : "Guests"}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">Check-in Date</label>
//               <input
//                 type="date"
//                 value={formData.checkIn}
//                 onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
//                 className={`StayBookingModal-input ${errors.checkIn ? "StayBookingModal-error" : ""}`}
//                 min={new Date().toISOString().split("T")[0]}
//               />
//               {errors.checkIn && <p className="StayBookingModal-errorMessage">{errors.checkIn}</p>}
//             </div>

//             <div className="StayBookingModal-formGroup">
//               <label className="StayBookingModal-label">Check-out Date</label>
//               <input
//                 type="date"
//                 value={formData.checkOut}
//                 onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
//                 className={`StayBookingModal-input ${errors.checkOut ? "StayBookingModal-error" : ""}`}
//                 min={formData.checkIn || new Date().toISOString().split("T")[0]}
//               />
//               {errors.checkOut && <p className="StayBookingModal-errorMessage">{errors.checkOut}</p>}
//             </div>
//           </div>

//           <div className="StayBookingModal-formGroup">
//             <label className="StayBookingModal-label">Special Requests</label>
//             <textarea
//               value={formData.specialRequests}
//               onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
//               rows={3}
//               className="StayBookingModal-input"
//               placeholder="Any special requests or requirements..."
//             />
//           </div>

//           {errors.submit && <p className="StayBookingModal-errorMessage">{errors.submit}</p>}

//           <div className="StayBookingModal-buttons">
//             <button type="button" onClick={onClose} className="StayBookingModal-cancelButton">
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="StayBookingModal-submitButton"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="StayBookingModal-loadingIcon" />
//                   Processing...
//                 </>
//               ) : (
//                 "Confirm Booking"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
