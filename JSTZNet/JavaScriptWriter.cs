// --------------------------------------------------------------------------------------------------------------------
// <copyright company="John L. Swartzentruber" file="JavaScriptWriter">
//   Copyright 2015 John L. Swartzentruber
// </copyright>
// <summary>
//   
// </summary>
// 
// --------------------------------------------------------------------------------------------------------------------

namespace JSTZNet
{
    using System.Collections.Generic;
    using System.IO;

    /// <summary>
    ///  Static class to output a TimeZoneData collection as a JavaScript object
    /// </summary>
    public static class JavaScriptWriter
    {

        /// <summary>
        /// Output the collection of time zone information as a JavaScript array of objects.
        /// </summary>
        /// <param name="timeZones">The collection of time zone data</param>
        /// <param name="writer">The writer to use to output the information</param>
        public static void Write(IEnumerable<TimeZoneData> timeZones, TextWriter writer)
        {
            writer.WriteLine("window.jstznet = window.jstznet || {}");
            writer.WriteLine("window.jstznet.zones = [");

            foreach (var timeZoneData in timeZones)
            {
                writer.Write("  {{ id: '{0}', utcOffset: {1}, dst: {2}", timeZoneData.Id, -timeZoneData.BaseOffset.TotalMinutes, timeZoneData.HasDST ? "true" : "false");
                if (timeZoneData.HasDST)
                {
                    writer.Write(", start: [{0},{1},{2},{3},{4},{5}]", timeZoneData.StartDate.Year, timeZoneData.StartDate.Month, timeZoneData.StartDate.Day, timeZoneData.StartDate.Hour, timeZoneData.StartDate.Minute, -timeZoneData.StartOffset.TotalMinutes);
                    writer.Write(", end: [{0},{1},{2},{3},{4},{5}]", timeZoneData.EndDate.Year, timeZoneData.EndDate.Month, timeZoneData.EndDate.Day, timeZoneData.EndDate.Hour, timeZoneData.EndDate.Minute, -timeZoneData.EndOffset.TotalMinutes);
                }

                writer.WriteLine(" },");
            }

            writer.WriteLine("];");
        }
    }
}
