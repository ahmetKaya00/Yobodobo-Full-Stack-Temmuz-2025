using System.ComponentModel.DataAnnotations;

namespace EFcore.Data
{
    public class Ogrenci
    {
        [Key]
        public int OgrenciId { get; set; }
        public string? OgrenciAd { get; }
        public string? OgrenciSoyad { get; }
        public string? Eposta { get; }
        public string? Telefon { get; }
        
    }
}