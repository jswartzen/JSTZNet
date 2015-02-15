// --------------------------------------------------------------------------------------------------------------------
// <copyright company="John L. Swartzentruber" file="Program.cs">
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

    using System.IO;
    using System.Linq;

    /// <summary>
    /// Main console app class
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Main function for this console app
        /// </summary>
        /// <param name="args">Program arguments</param>
        public static void Main(string[] args)
        {
            var allTimeZones = TimeZoneInfo.GetSystemTimeZones().Select(systemTimeZone => new TimeZoneData(systemTimeZone))
                                .Distinct()
                                .OrderBy(d => d.BaseOffset)
                                .ThenBy(d => d.StartDate)
                                .ThenBy(d => d.EndDate);

            using (var stringWriter = new StringWriter())
            {
                JavaScriptWriter.Write(allTimeZones, stringWriter);
                Console.WriteLine(stringWriter.ToString());
            }
        }
    }
}
