# 🗺️ Google Maps Integration Guide

## 📋 Setup Steps

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Maps JavaScript API**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key

### 2. Restrict Your API Key (Important!)

For security, restrict your API key:

**Application restrictions:**
- HTTP referrers (web sites)
- Add: `http://localhost:5174/*` and your production domain

**API restrictions:**
- Restrict key to: Maps JavaScript API

### 3. Add API Key to Your Project

Create a `.env` file in the root of your project:

```bash
cd /Users/sanjeetkaul/CascadeProjects/UNKIIP
```

Create `.env` file:
```env
VITE_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
```

**Important:** Replace `YOUR_API_KEY_HERE` with your actual API key.

### 4. Update .gitignore

Make sure `.env` is in your `.gitignore` file (it already should be):
```
.env
.env.local
```

### 5. Restart Dev Server

After adding the `.env` file:
```bash
# Stop current server (Ctrl+C)
npm run dev
```

## 🎯 What's Been Integrated

I've updated the Dispatch page with:

### Features:
- ✅ **Interactive Google Map** with real-time job locations
- ✅ **Custom Markers** for jobs (color-coded by status)
- ✅ **Info Windows** - Click markers to see job details
- ✅ **Provider Tracking** - Blue markers for service providers
- ✅ **Auto-center** - Map centers on all markers
- ✅ **Directions** - Click "Get Directions" in info window
- ✅ **Real-time Updates** - Markers update with job status

### Marker Colors:
- 🔴 **Red** - High priority jobs
- 🟠 **Orange** - Medium priority jobs  
- 🟢 **Green** - Low priority jobs
- 🔵 **Blue** - Service providers

### Sample Locations:
- Job 1: New York City (Plumbing Emergency)
- Job 2: Brooklyn (Electrical Repair)
- Job 3: Queens (HVAC Maintenance)
- Provider 1: Manhattan
- Provider 2: Brooklyn

## 🚀 How to Use

### View the Map:
1. Add your API key to `.env` file
2. Restart the dev server
3. Login as **Admin**
4. Go to **Dispatch** page
5. See the interactive map with job locations!

### Interact with Map:
- **Click markers** to see job details
- **Zoom** in/out with mouse wheel
- **Pan** by dragging the map
- **Get Directions** from info windows

## 🔧 Customization

### Change Default Center:
```typescript
const center = {
  lat: 40.7128, // Your latitude
  lng: -74.0060, // Your longitude
};
```

### Add More Markers:
```typescript
const jobs = [
  {
    id: 'JOB-004',
    position: { lat: YOUR_LAT, lng: YOUR_LNG },
    customer: 'Customer Name',
    type: 'Service Type',
    priority: 'high', // or 'medium', 'low'
  },
];
```

### Change Map Style:
```typescript
const mapOptions = {
  styles: [
    // Add custom map styles here
    // Get styles from: https://snazzymaps.com/
  ],
};
```

## 📊 Real-World Integration

### Connect to Backend:
```typescript
useEffect(() => {
  const fetchJobs = async () => {
    const response = await fetch('/api/admin/active-jobs');
    const data = await response.json();
    setJobs(data);
  };
  
  // Fetch every 30 seconds for real-time updates
  const interval = setInterval(fetchJobs, 30000);
  return () => clearInterval(interval);
}, []);
```

### Track Provider Location:
```typescript
// Get provider's real-time location
navigator.geolocation.watchPosition((position) => {
  updateProviderLocation({
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  });
});
```

## 🎨 Advanced Features

### Add Directions:
```typescript
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

directionsRenderer.setMap(map);

directionsService.route({
  origin: providerLocation,
  destination: jobLocation,
  travelMode: google.maps.TravelMode.DRIVING,
}, (result, status) => {
  if (status === 'OK') {
    directionsRenderer.setDirections(result);
  }
});
```

### Add Traffic Layer:
```typescript
const trafficLayer = new google.maps.TrafficLayer();
trafficLayer.setMap(map);
```

### Add Heatmap:
```typescript
import { HeatmapLayer } from '@react-google-maps/api';

<HeatmapLayer
  data={jobDensityData}
  options={{
    radius: 20,
    opacity: 0.6,
  }}
/>
```

## 🔐 Security Best Practices

1. **Never commit API keys** to Git
2. **Use environment variables** for API keys
3. **Restrict API key** to specific domains
4. **Enable billing alerts** in Google Cloud
5. **Monitor API usage** regularly

## 💰 Pricing

Google Maps offers:
- **$200 free credit** per month
- After that: ~$7 per 1,000 map loads
- Monitor usage in Google Cloud Console

## 📚 Resources

- [Google Maps JavaScript API Docs](https://developers.google.com/maps/documentation/javascript)
- [React Google Maps API Docs](https://react-google-maps-api-docs.netlify.app/)
- [Custom Map Styles](https://snazzymaps.com/)
- [Marker Clustering](https://developers.google.com/maps/documentation/javascript/marker-clustering)

## ✅ Checklist

- [ ] Get Google Maps API key
- [ ] Restrict API key to your domain
- [ ] Add API key to `.env` file
- [ ] Add `.env` to `.gitignore`
- [ ] Restart dev server
- [ ] Test map on Dispatch page
- [ ] Customize markers and locations
- [ ] Connect to backend API

## 🎉 You're Ready!

Once you add your API key, the map will work perfectly with:
- Real-time job tracking
- Provider locations
- Interactive markers
- Directions and routing

**Happy Mapping! 🗺️**
