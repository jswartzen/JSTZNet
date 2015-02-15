// --------------------------------------------------------------------------------------------------------------------
// <copyright company="John L. Swartzentruber" file="TimeZoneData.cs">
//   Copyright © 2015 John L Swartzentruber
// </copyright>
// <summary>
//   
// </summary>
// 
// --------------------------------------------------------------------------------------------------------------------

namespace JSTZNet
{
    using System;
    using System.Diagnostics.CodeAnalysis;
    using System.Globalization;

    /// <summary>
    /// The data about a TimeZone that we need to determine which time zone we are using
    /// </summary>
    public class TimeZoneData
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TimeZoneData"/> class
        /// based on an input TimeZoneInfo object
        /// </summary>
        /// <param name="timeZoneInfo">
        /// The reference TimeZoneInfo
        /// </param>
        public TimeZoneData(TimeZoneInfo timeZoneInfo)
        {
            this.Id = timeZoneInfo.Id;
            this.BaseOffset = timeZoneInfo.BaseUtcOffset;

            if (timeZoneInfo.SupportsDaylightSavingTime)
            {
                // Find the latest Transition
                foreach (var adjustmentRule in timeZoneInfo.GetAdjustmentRules())
                {
                    if (adjustmentRule.DateStart <= DateTime.UtcNow && adjustmentRule.DateEnd >= DateTime.UtcNow)
                    {
                        this.StartDate = GetTransitionDate(adjustmentRule.DaylightTransitionStart, DateTime.UtcNow);
                        this.StartDate += adjustmentRule.DaylightDelta; // When we move to DST, move out of the ambiguous time
                        this.StartOffset = timeZoneInfo.GetUtcOffset(this.StartDate);

                        this.EndDate = GetTransitionDate(adjustmentRule.DaylightTransitionEnd, DateTime.UtcNow);
                        this.EndOffset = timeZoneInfo.GetUtcOffset(this.EndDate);
                    }
                }
            }

            this.HasDST = this.StartDate > DateTime.MinValue && this.EndDate > DateTime.MinValue;
        }

        /// <summary>
        /// Gets the .Net Id for this time zone
        /// </summary>
        public string Id { get; private set; }

        /// <summary>
        /// Gets the base offset from UTC
        /// </summary>
        public TimeSpan BaseOffset { get; private set; }

        /// <summary>
        /// Gets a value indicating whether this time zone uses daylight saving time
        /// </summary>
        public bool HasDST { get; private set; }

        /// <summary>
        /// Gets the local ate the DST starts (in an arbitrary recent year)
        /// </summary>
        public DateTime StartDate { get; private set; }

        /// <summary>
        ///  Gets the offset from UTC for the StartDate
        /// </summary>
        public TimeSpan StartOffset { get; private set; }

        /// <summary>
        ///  Gets the local date that DST ends (in an arbitrary recent year)
        /// </summary>
        public DateTime EndDate { get; private set; }

        /// <summary>
        ///  Gets the offset from UTC for the EndDate
        /// </summary>
        public TimeSpan EndOffset { get; private set; }

        /// <summary>
        /// To see if two TimeZoneData objects are the same except for their name
        /// </summary>
        /// <param name="other">The other object we are comparing</param>
        /// <returns>True if they are equivalent</returns>
        public override bool Equals(object other)
        {
            var otherTzd = other as TimeZoneData;
            if (otherTzd != null && this.BaseOffset == otherTzd.BaseOffset && this.HasDST == otherTzd.HasDST)
            {
                if (this.HasDST)
                {
                    return this.StartDate == otherTzd.StartDate && this.StartOffset == otherTzd.StartOffset
                           && this.EndDate == otherTzd.EndDate && this.EndOffset == otherTzd.EndOffset;
                }

                return true;
            }

            return false;
        }

        /// <summary>
        /// Create a hash value for this object
        /// </summary>
        /// <returns>An integer hash value</returns>
        public override int GetHashCode()
        {
            int hash = (int)this.BaseOffset.TotalMinutes;
            if (this.HasDST)
            {
                hash += this.StartDate.GetHashCode();
                hash += this.EndDate.GetHashCode();
                hash += (int)this.StartOffset.TotalSeconds;
                hash += (int)this.EndOffset.TotalSeconds;
            }

            return hash;
        }
    
        /// <summary>
        /// Get the DateTime for the transition date specified by the input parameters.
        /// This is heavily based on sample code from 
        /// https://msdn.microsoft.com/en-us/library/system.timezoneinfo.transitiontime.isfixeddaterule.aspx
        /// </summary>
        /// <param name="transition">The TransitionTime object we are converting</param>
        /// <param name="basis">The year to base the conversion on</param>
        /// <returns>The resulting DateTime object</returns>
        [SuppressMessage("StyleCop.CSharp.DocumentationRules", "SA1650:ElementDocumentationMustBeSpelledCorrectly", Justification = "These are within a hyperlink")]
        private static DateTime GetTransitionDate(TimeZoneInfo.TransitionTime transition, DateTime basis)
        {
            // For non-fixed date rules, get local calendar
            Calendar cal = CultureInfo.CurrentCulture.Calendar;

            // Get first day of week for transition 
            // For example, the 3rd week starts no earlier than the 15th of the month 
            var startOfWeek = (transition.Week * 7) - 6;

            // What day of the week does the month start on? 
            var firstDayOfWeek = (int)cal.GetDayOfWeek(new DateTime(basis.Year, transition.Month, 1));

            // Determine how much start date has to be adjusted 
            var changeDayOfWeek = (int)transition.DayOfWeek;

            int transitionDay;
            if (transition.IsFixedDateRule)
            {
                transitionDay = transition.Day;
            }
            else if (firstDayOfWeek <= changeDayOfWeek)
            {
                transitionDay = startOfWeek + changeDayOfWeek - firstDayOfWeek;
            }
            else
            {
                transitionDay = startOfWeek + 7 - firstDayOfWeek + changeDayOfWeek;
            }

            // Adjust for months with no fifth week 
            if (transitionDay > cal.GetDaysInMonth(basis.Year, transition.Month))
            {
                transitionDay -= 7;
            }

            return new DateTime(basis.Year, transition.Month, transitionDay, transition.TimeOfDay.Hour, transition.TimeOfDay.Minute, transition.TimeOfDay.Second).Add(TimeSpan.FromMinutes(1));
        }
    }
}
