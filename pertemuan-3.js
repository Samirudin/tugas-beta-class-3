function pyramidBintang (tinggi) {
  
  for (var i = 1; i <= tinggi; i++) {
    var baris = '';
    
    for (var j = 1; j <= (tinggi - i + 1); j++) {
      baris += '*';
    }
        
    console.log(baris);
  }
}

pyramidBintang(6);